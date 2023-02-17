package com.softdev.ecommerce.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Product {

    private String sku;
    private String name;
    private String description;
    private BigDecimal unitPrice;
    private String imageUrl;
    private String active;

}
