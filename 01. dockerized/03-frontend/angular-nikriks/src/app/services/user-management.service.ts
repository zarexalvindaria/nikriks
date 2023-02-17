import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../common/customer';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  private baseUrl = environment.nikriksApiUrl + '/users';

  constructor(private httpClient: HttpClient) {}

  getCustomerList(): Observable<GetResponseCustomerList> {
    // need to build URL based on category id
    const customerListUrl = `${this.baseUrl}/search/findByOrderByFirstNameAsc`;

    return this.httpClient.get<GetResponseCustomerList>(customerListUrl);
  }
}

interface GetResponseCustomerList {
  _embedded: {
    users: Customer[];
  };
}
