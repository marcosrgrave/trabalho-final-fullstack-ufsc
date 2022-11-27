package com.bezkoder.spring.files.upload.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.bezkoder.spring.files.upload.model.Category;
import com.bezkoder.spring.files.upload.service.CategoryService;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {

	@Autowired
	private CategoryService categoriaService;

	@PutMapping(value = "/categorias/{id}")
	public ResponseEntity<Category> update(@PathVariable Long id, @RequestBody Category categoria) {
		Category categoriaAtualizado = categoriaService.update(id, categoria);
		return ResponseEntity.ok().body(categoriaAtualizado);
	}

	@DeleteMapping(value = "/categorias/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id) {
		categoriaService.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping(value = "/categorias")
	public ResponseEntity<Category> save(@RequestBody Category categoria) {
		Category categoriasSaved = categoriaService.save(categoria);

		URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/categorias/{id}")
				.buildAndExpand(categoriasSaved.getId()).toUri();

		return ResponseEntity.created(uri).body(categoriasSaved);
	}

	@GetMapping(value = "/categorias")
	public ResponseEntity<List<Category>> findAll() {

		List<Category> categorias = categoriaService.findAll();
		return ResponseEntity.ok().body(categorias);
	}

	@GetMapping(value = "/categorias/{id}")
	public ResponseEntity<Category> findById(@PathVariable Long id) {

		Category c = categoriaService.findById(id);
		return ResponseEntity.ok().body(c);

	}

}
