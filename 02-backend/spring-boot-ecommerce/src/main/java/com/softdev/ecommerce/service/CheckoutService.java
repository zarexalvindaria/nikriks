package com.softdev.ecommerce.service;

import com.softdev.ecommerce.dto.Purchase;
import com.softdev.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
