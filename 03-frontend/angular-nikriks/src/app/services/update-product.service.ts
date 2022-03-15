import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateProductService {
  private productUrl = environment.nikriksApiUrl + '/product-update/48';

  constructor(private httpClient: HttpClient) {}

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put<Product>(this.productUrl, product);
  }
}
