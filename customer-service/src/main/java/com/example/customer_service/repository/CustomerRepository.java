package com.example.customer_service.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.customer_service.model.Customer;

public interface CustomerRepository  extends MongoRepository<Customer,String>{
	Customer findByEmail(String email);
}