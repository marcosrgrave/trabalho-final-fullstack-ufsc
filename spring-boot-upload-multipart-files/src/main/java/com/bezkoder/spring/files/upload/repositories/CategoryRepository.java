package com.bezkoder.spring.files.upload.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.files.upload.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	
}
