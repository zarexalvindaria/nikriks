import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { CustomerOrdersService } from 'src/app/services/customer-orders.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css'],
})
export class CustomerOrdersComponent implements OnInit {
  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private customerOrdersService: CustomerOrdersService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // retrieve data from the service
    this.customerOrdersService.getOrderHistory().subscribe((data) => {
      this.orderHistoryList = data._embedded.orders;
      console.log(`Customer Orders: ` + JSON.stringify(this.orderHistoryList));
    });
  }
}
