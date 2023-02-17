package com.softdev.ecommerce.controller;


import com.softdev.ecommerce.entity.Product;
import com.softdev.ecommerce.dao.ProductRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




public class ProductController {
    ProductRepository productRepository;

    @PutMapping("/products/{id}")

    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") Long productId,
                                                 @RequestBody Product productDetails) throws ResourceNotFoundException {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + productId));

        product.setSku(productDetails.getSku());
        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setUnitPrice(productDetails.getUnitPrice());
        product.setImageUrl(productDetails.getImageUrl());
        product.setActive(productDetails.getActive());


        final Product updatedProduct = productDetails.save(product);
        return ResponseEntity.ok(updatedProduct);
    }
}