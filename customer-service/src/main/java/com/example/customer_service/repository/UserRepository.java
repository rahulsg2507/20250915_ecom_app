package com.example.customer_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.customer_service.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email); // custom finder
}