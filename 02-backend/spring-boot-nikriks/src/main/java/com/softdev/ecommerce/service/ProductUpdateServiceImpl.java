package com.softdev.ecommerce.service;

import com.softdev.ecommerce.dto.Product;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.transaction.Transactional;

@Service
public class ProductUpdateServiceImpl implements ProductUpdateService{


    @Transactional
    public Product updateProduct(@PathVariable(value = "id") Long productId, Product productDetails) {

        SimpleJpaRepository<Product, Long> productRepository = null;
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + productId));

        product.setSku(productDetails.getSku());
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setUnitPrice(productDetails.getUnitPrice());
        product.setImageUrl(productDetails.getImageUrl());
        product.setActive(productDetails.getActive());

        final Product updateProduct = productRepository.save(product);

        return updateProduct;
    }

    @Override
    public Product updateProduct(Product product) {
        return null;
    }

//        // retrieve the order info from dto
//        Product product = product.get();
//
//        // populate order with orderItems
//        Set<OrderItem> orderItems = purchase.getOrderItems();
//        orderItems.forEach(item -> order.add(item));
//
//        // populate order with billingAddress and shippingAddress
//        order.setBillingAddress(purchase.getBillingAddress());
//        order.setShippingAddress(purchase.getShippingAddress());
//
//        // populate customer with order
//        Customer customer = purchase.getCustomer();
//
//        // check if this is an existing customer
//        String theEmail = customer.getEmail();
//
//        Customer customerFromDB = customerRepository.findByEmail(theEmail);
//
//        if (customerFromDB != null) {
//            // we found them ... let's assign them accordingly
//            customer = customerFromDB;
//        }
//
//        customer.add(order);
//
//        // save to the database
//        customerRepository.save(customer);

        // return a response
//        return new ProductResponse(orderTrackingNumber);
//        return updateProduct();
}