package com.bezkoder.spring.files.upload.service;

import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.spring.files.upload.model.Category;
import com.bezkoder.spring.files.upload.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoriaRepository;

	public Category update(Long id, Category new_categoria) {
		Category categoriaEntity = categoriaRepository.getReferenceById(id);

		categoriaEntity.setName(new_categoria.getName());

		return categoriaRepository.save(categoriaEntity);
	}

	public void deleteById(Long id) {
		categoriaRepository.deleteById(id);
	}

	public Category save(Category categoria) {
		return categoriaRepository.save(categoria);
	}

	public List<Category> findAll() {
		return categoriaRepository.findAll();
	}

	public Category findById(Long id) {
		try {
			return categoriaRepository.findById(id).get();
		} catch (NoSuchElementException e) {
			throw new EntityNotFoundException("EntityNotFoundException Categoria id: " + id);
		}
	}

}
