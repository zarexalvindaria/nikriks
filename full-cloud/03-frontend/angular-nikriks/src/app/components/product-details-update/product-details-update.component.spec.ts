import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsUpdateComponent } from './product-details-update.component';

describe('ProductDetailsUpdateComponent', () => {
  let component: ProductDetailsUpdateComponent;
  let fixture: ComponentFixture<ProductDetailsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
