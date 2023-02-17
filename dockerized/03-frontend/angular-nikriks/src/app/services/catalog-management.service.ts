import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root',
})
export class CatalogManagementService {
  private baseUrl = environment.nikriksApiUrl + '/products';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<GetResponseProductList> {
    // need to build URL based on category id
    const productListUrl = `${this.baseUrl}/search/findByOrderByDateCreatedDesc`;

    return this.httpClient.get<GetResponseProductList>(productListUrl);
  }
}

interface GetResponseProductList {
  _embedded: {
    products: Product[];
  };
}
