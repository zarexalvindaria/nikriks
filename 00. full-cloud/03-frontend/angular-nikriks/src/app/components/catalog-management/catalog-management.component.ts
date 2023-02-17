import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { CatalogManagementService } from 'src/app/services/catalog-management.service';

@Component({
  selector: 'app-catalog-management',
  templateUrl: './catalog-management.component.html',
  styleUrls: ['./catalog-management.component.css'],
})
export class CatalogManagementComponent implements OnInit {
  products: Product[] = [];

  constructor(private catalogManagementService: CatalogManagementService) {}

  ngOnInit(): void {
    this.handleOrderHistory();
  }
  handleOrderHistory() {
    // retrieve data from the service
    this.catalogManagementService.getProductList().subscribe((data) => {
      this.products = data._embedded.products;

      // console.log(`Products: ` + JSON.stringify(this.products));
    });
  }
}
