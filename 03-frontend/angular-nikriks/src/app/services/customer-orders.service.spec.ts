import { TestBed } from '@angular/core/testing';

import { CustomerOrdersService } from './customer-orders.service';

describe('CustomerOrdersService', () => {
  let service: CustomerOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
