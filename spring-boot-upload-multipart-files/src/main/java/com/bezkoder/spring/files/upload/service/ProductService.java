package com.bezkoder.spring.files.upload.service;

import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.spring.files.upload.model.Category;
import com.bezkoder.spring.files.upload.model.Product;
import com.bezkoder.spring.files.upload.repositories.CategoryRepository;
import com.bezkoder.spring.files.upload.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository produtoRepository;

	@Autowired
	private CategoryRepository categoriaRepository;

	public Product update(Long id, Product new_produto) {
		Product produtoEntity = produtoRepository.getReferenceById(id);

		produtoEntity.setName(new_produto.getName());
		produtoEntity.setPrice(new_produto.getPrice());
		produtoEntity.setStock_amount(new_produto.getStock_amount());
		produtoEntity.setImage(new_produto.getImage());

		return produtoRepository.save(produtoEntity);
	}

	public void deleteById(Long id) {
		produtoRepository.deleteById(id);
	}

	public Product save(Product produto) {
		return produtoRepository.save(produto);
	}

	public List<Product> findAll() {
		return produtoRepository.findAll();
	}

	public Product findById(Long id) {
		try {
			return produtoRepository.findById(id).get();
		} catch (NoSuchElementException e) {
			throw new EntityNotFoundException("EntityNotFoundException Produto id: " + id);
		}
	}

	public void setCategory(Long idProduto, Long idCategory) {
		Product produto = produtoRepository.findById(idProduto).get();
		Category category = categoriaRepository.findById(idCategory).get();
		produto.setCategory(category);
		produtoRepository.save(produto);
	}

}
