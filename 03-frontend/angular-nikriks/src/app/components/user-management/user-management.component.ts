import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  customerList: Customer[] = [];
  storage: Storage = sessionStorage;

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // retrieve data from the service
    this.userManagementService.getCustomerList().subscribe((data) => {
      this.customerList = data._embedded.users;

      JSON.parse(this.storage.getItem('userEmail')!);
      console.log(`Customer Orders: ` + JSON.stringify(this.customerList));
    });
  }
}
