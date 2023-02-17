import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from 'src/app/common/country';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { PaymentInfo } from 'src/app/common/payment-info';
import { Purchase } from 'src/app/common/purchase';
import { Region } from 'src/app/common/region';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { NikriksFormService } from 'src/app/services/nikriks-form.service';
import { NikriksValidators } from 'src/app/validators/nikriks-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;
  orderStatus: string = 'New';
  paid?: boolean = true;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  countries: Country[] = [];

  shippingAddressRegions: Region[] = [];
  billingAddressRegions: Region[] = [];

  storage: Storage = sessionStorage;

  // initialize Stripe API
  stripe = Stripe(environment.stripePublishableKey);

  paymentInfo: PaymentInfo = new PaymentInfo();
  cardElement: any;
  displayError: any = '';

  isDisabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private nikRiksFormService: NikriksFormService,
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // setup Stripe payment form
    this.setupStripePaymentForm();

    this.reviewCartDetails();

    // read the user's email address from browser storage
    // const theFirstName = JSON.parse(this.storage.getItem('userFirstName')!);
    // const theLastName = JSON.parse(this.storage.getItem('userLastName')!);
    // const theMobileNumber = JSON.parse(
    //   this.storage.getItem('userMobileNumber')!
    // );
    const theEmail = JSON.parse(this.storage.getItem('userEmail')!);

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),

        lastName: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),

        mobileNumber: new FormControl('', [
          Validators.required,
          Validators.pattern('^(09|\\+639)+\\d{9}$'),
          NikriksValidators.notOnlyWhitespace,
        ]),

        email: new FormControl(theEmail, [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      }),
      shippingAddress: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        region: new FormControl('', [Validators.required]),
        barangay: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', []),
      }),
      billingAddress: this.formBuilder.group({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        city: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        region: new FormControl('', [Validators.required]),
        barangay: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          NikriksValidators.notOnlyWhitespace,
        ]),
        country: new FormControl('', [Validators.required]),
        zipCode: new FormControl('', []),
      }),
      creditCard: this.formBuilder.group({}),
    });

    // populate countries

    this.nikRiksFormService.getCountries().subscribe((data) => {
      // console.log('Retrieved countries: ' + JSON.stringify(data));
      this.countries = data;
    });
  }

  setupStripePaymentForm() {
    // get a handle to stripe elements
    var elements = this.stripe.elements();

    // Create a card element ... and hide the zip-code field
    this.cardElement = elements.create('card', { hidePostalCode: true });

    // Add an instance of card UI component into the 'card-element' div
    this.cardElement.mount('#card-element');

    // Add event binding for the 'change' event on the card element
    this.cardElement.on(
      'change',
      (event: { complete: any; error: { message: any } }) => {
        // get a handle to card-errors element
        this.displayError = document.getElementById('card-errors');

        if (event.complete) {
          this.displayError.textContent = '';
        } else if (event.error) {
          // show validation error to customer
          this.displayError.textContent = event.error.message;
        }
      }
    );
  }

  reviewCartDetails() {
    // subscribe to cartService.totalQuantity
    this.cartService.totalQuantity.subscribe(
      (totalQuantity) => (this.totalQuantity = totalQuantity)
    );

    // subscribe to cartService.totalPrice
    this.cartService.totalPrice.subscribe(
      (totalPrice) => (this.totalPrice = totalPrice)
    );
  }

  get firstName() {
    return this.checkoutFormGroup.get('customer.firstName');
  }
  get lastName() {
    return this.checkoutFormGroup.get('customer.lastName');
  }
  get mobileNumber() {
    return this.checkoutFormGroup.get('customer.mobileNumber');
  }
  get email() {
    return this.checkoutFormGroup.get('customer.email');
  }

  get shippingAddressStreet() {
    return this.checkoutFormGroup.get('shippingAddress.street');
  }
  get shippingAddressCity() {
    return this.checkoutFormGroup.get('shippingAddress.city');
  }
  get shippingAddressRegion() {
    return this.checkoutFormGroup.get('shippingAddress.region');
  }
  get shippingAddressBarangay() {
    return this.checkoutFormGroup.get('shippingAddress.barangay');
  }
  get shippingAddressZipCode() {
    return this.checkoutFormGroup.get('shippingAddress.zipCode');
  }
  get shippingAddressCountry() {
    return this.checkoutFormGroup.get('shippingAddress.country');
  }

  get billingAddressStreet() {
    return this.checkoutFormGroup.get('billingAddress.street');
  }
  get billingAddressCity() {
    return this.checkoutFormGroup.get('billingAddress.city');
  }
  get billingAddressRegion() {
    return this.checkoutFormGroup.get('billingAddress.region');
  }
  get billingAddressBarangay() {
    return this.checkoutFormGroup.get('billingAddress.barangay');
  }
  get billingAddressZipCode() {
    return this.checkoutFormGroup.get('billingAddress.zipCode');
  }
  get billingAddressCountry() {
    return this.checkoutFormGroup.get('billingAddress.country');
  }

  get creditCardType() {
    return this.checkoutFormGroup.get('creditCard.cardType');
  }
  get creditCardNameOnCard() {
    return this.checkoutFormGroup.get('creditCard.nameOnCard');
  }
  get creditCardNumber() {
    return this.checkoutFormGroup.get('creditCard.cardNumber');
  }
  get creditCardSecurityCode() {
    return this.checkoutFormGroup.get('creditCard.securityCode');
  }

  copyShippingAddressToBillingAddress(event: any) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
      // bug fix for regions
      this.billingAddressRegions = this.shippingAddressRegions;
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();

      // bug fix for regions
      this.billingAddressRegions = [];
    }
  }

  onSubmit() {
    // console.log('Handling the submit button');

    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

    // set up order
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantity;
    order.orderStatus = this.orderStatus;
    order.paid = this.paid;

    // get cart items
    const cartItems = this.cartService.cartItems;

    // create orderItems from cartItems
    let orderItems: OrderItem[] = cartItems.map(
      (tempCartItem) => new OrderItem(tempCartItem)
    );

    // set up purchase
    let purchase = new Purchase();

    // populate purchase - customer
    purchase.customer = this.checkoutFormGroup.controls['customer'].value;

    // populate purchase - shipping address
    purchase.shippingAddress =
      this.checkoutFormGroup.controls['shippingAddress'].value;
    const shippingRegion: Region = JSON.parse(
      JSON.stringify(purchase.shippingAddress?.region)
    );
    const shippingCountry: Country = JSON.parse(
      JSON.stringify(purchase.shippingAddress?.country)
    );
    purchase.shippingAddress!.region = shippingRegion.name;
    purchase.shippingAddress!.country = shippingCountry.name;

    // populate purchase - billing address
    purchase.billingAddress =
      this.checkoutFormGroup.controls['billingAddress'].value;
    const billingRegion: Region = JSON.parse(
      JSON.stringify(purchase.billingAddress?.region)
    );
    const billingCountry: Country = JSON.parse(
      JSON.stringify(purchase.billingAddress?.country)
    );
    purchase.billingAddress!.region = billingRegion.name;
    purchase.billingAddress!.country = billingCountry.name;

    // populate purchase - order and orderItems
    purchase.order = order;
    purchase.orderItems = orderItems;

    // compute payment info
    this.paymentInfo.amount = Math.round(this.totalPrice * 100);
    this.paymentInfo.currency = 'PHP';
    this.paymentInfo.receiptEmail = purchase.customer?.email;

    // console.log(`this.paymentInfo.amount: ${this.paymentInfo.amount}`);

    // if valid form then
    // - create payment intent
    // - confirm card payment
    // - place order

    if (
      !this.checkoutFormGroup.invalid &&
      this.displayError.textContent === ''
    ) {
      this.isDisabled = true;

      this.checkoutService
        .createPaymentIntent(this.paymentInfo)
        .subscribe((paymentIntentResponse) => {
          this.stripe
            .confirmCardPayment(
              paymentIntentResponse.client_secret,
              {
                payment_method: {
                  card: this.cardElement,
                  billing_details: {
                    email: purchase.customer?.email,
                    name: `${purchase.customer?.firstName} ${purchase.customer?.lastName}`,
                    address: {
                      line1: purchase.billingAddress?.street,
                      city: purchase.billingAddress?.city,
                      state: purchase.billingAddress?.region,
                      postal_code: purchase.billingAddress?.zipCode,
                      country: this.billingAddressCountry?.value.code,
                    },
                  },
                },
              },
              { handleActions: false }
            )
            .then(
              function (result: { error: { message: any } }) {
                if (result.error) {
                  // inform the customer there was an error
                  alert(`There was an error: ${result.error.message}`);
                  this.isDisabled = false;
                } else {
                  // call REST API via the CheckoutService
                  this.checkoutService.placeOrder(purchase).subscribe({
                    next: (response: { orderTrackingNumber: any }) => {
                      alert(
                        `Your order has been received.\nOrder tracking number: ${response.orderTrackingNumber}`
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
              }.bind(this)
            );
        });
    } else {
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }
  }

  resetCart() {
    // reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    this.cartService.persistentCartItems();

    // reset the form
    this.checkoutFormGroup.reset();

    // navigate back to the products page
    this.router.navigateByUrl('/products');
  }

  getRegions(formGroupName: string) {
    const formGroup = this.checkoutFormGroup.get(formGroupName);

    const countryCode = formGroup?.value.country.code;
    const countryName = formGroup?.value.country.name;

    // console.log(`${formGroupName} country code: ${countryCode}`);
    // console.log(`${formGroupName} country name: ${countryName}`);

    this.nikRiksFormService.getRegions(countryCode).subscribe((data) => {
      if (formGroupName === 'shippingAddress') {
        this.shippingAddressRegions = data;
      } else {
        this.billingAddressRegions = data;
      }

      // select first item by default
      formGroup?.get('region')?.setValue(data[0]);
    });
  }
}
