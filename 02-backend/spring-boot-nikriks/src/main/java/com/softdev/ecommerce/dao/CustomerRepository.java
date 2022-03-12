package com.softdev.ecommerce.dao;

import com.softdev.ecommerce.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

//@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByEmail(String theEmail);
    Page<Customer> findByOrderByFirstNameAsc(Pageable pageable);

}
