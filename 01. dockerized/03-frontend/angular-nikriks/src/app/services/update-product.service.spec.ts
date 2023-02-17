import { TestBed } from '@angular/core/testing';

import { UpdateProductService } from './update-product.service';

describe('UpdateProductService', () => {
  let service: UpdateProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
