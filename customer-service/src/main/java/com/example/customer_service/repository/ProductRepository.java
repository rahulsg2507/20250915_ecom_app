package com.example.customer_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.customer_service.model.Product;
import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByCategory(String category);
    List<Product> findByTagsContaining(String tag);
}