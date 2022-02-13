import { TestBed } from '@angular/core/testing';

import { NikriksFormService } from './nikriks-form.service';

describe('NikriksFormService', () => {
  let service: NikriksFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NikriksFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
