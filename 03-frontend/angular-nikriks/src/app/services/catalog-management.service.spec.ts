import { TestBed } from '@angular/core/testing';

import { CatalogManagementService } from './catalog-management.service';

describe('CatalogManagementService', () => {
  let service: CatalogManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
