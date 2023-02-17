package com.softdev.ecommerce.service;

import com.softdev.ecommerce.dto.Purchase;
import com.softdev.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(com.softdev.ecommerce.dto.PaymentInfo paymentInfo) throws StripeException;
}
