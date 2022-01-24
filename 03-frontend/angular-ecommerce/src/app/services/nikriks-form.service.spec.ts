import { TestBed } from '@angular/core/testing';

import { PetfluencerzFormService } from './nikriks-form.service';

describe('PetfluencerzFormService', () => {
  let service: PetfluencerzFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetfluencerzFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
