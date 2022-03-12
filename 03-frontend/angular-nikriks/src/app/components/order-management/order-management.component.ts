import { Component, OnInit } from '@angular/core';
import { OrderManagement } from 'src/app/common/order-management';
import { Customer } from 'src/app/common/customer';
import { OrderManagementService } from 'src/app/services/order-management.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css'],
})
export class OrderManagementComponent implements OnInit {
  orderHistoryList: OrderManagement[] = [];
  storage: Storage = sessionStorage;
  // customer: Customer[] = [];

  constructor(private orderManagementService: OrderManagementService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // retrieve data from the service
    this.orderManagementService.getOrderHistory().subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;

      JSON.parse(this.storage.getItem('userEmail')!);
      console.log(`Customer Orders: ` + JSON.stringify(this.orderHistoryList));
    });
  }
}
