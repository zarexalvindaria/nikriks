import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { UpdateProductService } from 'src/app/services/update-product.service';

@Component({
  selector: 'app-product-details-update',
  templateUrl: './product-details-update.component.html',
  styleUrls: ['./product-details-update.component.css'],
})
export class ProductDetailsUpdateComponent implements OnInit {
  productFormGroup!: FormGroup;

  product: Product = new Product();
  productStatus: boolean[] = [true, false];
  isDisabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private updateProductService: UpdateProductService,
    private route: ActivatedRoute,
    private router: Router
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

    if (!this.productFormGroup.invalid) {
      this.isDisabled = true;
      // call REST API via the CheckoutService
      this.updateProductService.updateProduct(product).subscribe({
        next: (response: {}) => {
          alert(
            // `Your order has been received.\nOrder tracking number: ${response}`
            // console.log("It works!")
            `It works!`
          );

          // reset cart
          this.resetCart();
          this.isDisabled = false;
        },

        error: (err: { message: any }) => {
          alert(`There was an error: ${err.message}`);
          this.isDisabled = false;
        },
      });
    }
  }

  resetCart() {
    // reset the form
    this.productFormGroup.reset();

    // navigate back to the products page
    this.router.navigateByUrl('/products');
  }
}
