package com.softdev.ecommerce.dto;

import com.softdev.ecommerce.entity.Address;
import com.softdev.ecommerce.entity.Customer;
import com.softdev.ecommerce.entity.Order;
import com.softdev.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
