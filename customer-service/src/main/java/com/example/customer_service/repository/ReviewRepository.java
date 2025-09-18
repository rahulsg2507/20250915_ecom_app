package com.example.customer_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.customer_service.model.Review;
import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {
    List<Review> findByProductId(String productId);
    List<Review> findByUserId(String userId);
}