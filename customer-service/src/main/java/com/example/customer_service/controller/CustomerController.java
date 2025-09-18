package com.example.customer_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

import com.example.customer_service.model.Customer;
import com.example.customer_service.repository.CustomerRepository;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private static final Logger log = LoggerFactory.getLogger(CustomerController.class);

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        log.info("Creating new customer: {}", customer.getName());
        return customerRepository.save(customer);
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        log.info("Fetching all customers");
        return customerRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteCustomer(@PathVariable String id) {
        Optional<Customer> customer = customerRepository.findById(id);

        if (customer.isEmpty()) {
            log.error("Failed to delete customer: {} not found", id);
            return "Customer not found";
        }

        customerRepository.deleteById(id);
        log.info("Customer deleted: {}", id);
        return "Customer deleted successfully";
    }
}