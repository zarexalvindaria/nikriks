package com.softdev.ecommerce.dao;

import com.softdev.ecommerce.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
public interface UsersRepository extends JpaRepository<User, Long> {

    Page<User> findByOrderByFirstNameAsc(Pageable pageable);

}
