import { Component, OnInit } from '@angular/core';
import { CustomerOrders } from 'src/app/common/customer-orders';
import { CustomerOrdersService } from 'src/app/services/customer-orders.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit {
  orderHistoryList: CustomerOrders[] = [];
  storage: Storage = sessionStorage;
  firstName?: string;

  constructor(private customerOrdersService: CustomerOrdersService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // retrieve data from the service
    this.customerOrdersService.getOrderHistory().subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;

      JSON.parse(this.storage.getItem('userEmail')!);
      console.log(`Customer Orders: ` + JSON.stringify(this.orderHistoryList));
    });
  }
}
