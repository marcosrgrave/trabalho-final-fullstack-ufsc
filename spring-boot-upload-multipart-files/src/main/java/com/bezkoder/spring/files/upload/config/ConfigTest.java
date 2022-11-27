package com.bezkoder.spring.files.upload.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.bezkoder.spring.files.upload.model.Category;
import com.bezkoder.spring.files.upload.model.Product;
import com.bezkoder.spring.files.upload.repositories.CategoryRepository;
import com.bezkoder.spring.files.upload.repositories.ProductRepository;

@Configuration
@Profile("config")
public class ConfigTest implements CommandLineRunner {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public void run(String... args) throws Exception {

        Category category1 = new Category("Categoria 1");
        Category category2 = new Category("Categoria 2");

        categoryRepository.saveAll(Arrays.asList(category1, category2));

        Product product1 = new Product("Produto 1", 9.99d, 5, "empty image");
        Product product2 = new Product("Produto 2", 10.99d, 3, "empty image");
        Product product3 = new Product("Produto 3", 12.99d, 10, "empty image");
        Product product4 = new Product("Produto 4", 15.99d, 2, "empty image");
        Product product5 = new Product("Produto 5", 9.99d, 7, "empty image");
        Product product6 = new Product("Produto 6", 9.99d, 22, "empty image");

        product1.setCategory(category1);
        product2.setCategory(category1);
        product3.setCategory(category1);

        product4.setCategory(category2);
        product5.setCategory(category2);
        product6.setCategory(category2);

        productRepository.saveAll(Arrays.asList(product1, product2, product3, product4, product5, product6));

    }

}
