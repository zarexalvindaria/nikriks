import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-update',
  templateUrl: './product-details-update.component.html',
  styleUrls: ['./product-details-update.component.css'],
})
export class ProductDetailsUpdateComponent implements OnInit {
  productFormGroup!: FormGroup;

  product: Product = new Product();
  productStatus: boolean[] = [true, false];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });

    this.productFormGroup = this.formBuilder.group({
      product: this.formBuilder.group({
        sku: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),

        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),

        description: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),

        unitPrice: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),

        imageUrl: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),

        active: new FormControl(true, [Validators.required]),
      }),
    });
  }

  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(theProductId).subscribe((data: Product) => {
      this.product = data;
      this.setDefaultValues();
    });
  }

  setDefaultValues() {
    // Set SKU default Value
    this.productFormGroup.get('product.sku')?.patchValue(this.product['sku']);

    // Set Product Name default Value
    this.productFormGroup.get('product.name')?.patchValue(this.product['name']);

    // Set Description default Value
    this.productFormGroup
      .get('product.description')
      ?.patchValue(this.product['description']);

    // Set Product Name default Value
    this.productFormGroup
      .get('product.unitPrice')
      ?.patchValue(this.product['unitPrice']);

    // Set Product Name default Value
    this.productFormGroup
      .get('product.imageUrl')
      ?.patchValue(this.product['imageUrl']);

    // Set Product Name default Value
    this.productFormGroup
      .get('product.active')
      ?.patchValue(this.product['active']);
  }

  get sku() {
    return this.productFormGroup.get('product.sku');
  }
  get name() {
    return this.productFormGroup.get('product.name');
  }
  get description() {
    return this.productFormGroup.get('product.description');
  }
  get unitPrice() {
    return this.productFormGroup.get('product.unitPrice');
  }
  get imageUrl() {
    return this.productFormGroup.get('product.imageUrl');
  }
  get active() {
    return this.productFormGroup.get('product.active');
  }

  onSubmit() {
    console.log('Handling the submit button');

    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }

    // Set up product for update
    let product = new Product();
    product = this.productFormGroup.controls['product'].value;
    console.log(product);
  }
}
