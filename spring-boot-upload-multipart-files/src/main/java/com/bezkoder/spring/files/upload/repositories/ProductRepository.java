package com.bezkoder.spring.files.upload.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.files.upload.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
}
