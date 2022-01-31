package com.softdev.ecommerce.service;

import com.softdev.ecommerce.dao.CustomerRepository;
import com.softdev.ecommerce.dto.Purchase;
import com.softdev.ecommerce.dto.PurchaseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutServiceImpl implements CheckoutService {

    private CustomerRepository customerRepository;

    @Autowired
    public CheckoutServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
    @Override
    public PurchaseResponse placeOrder(Purchase purchase) {
        return null;
    }
}
