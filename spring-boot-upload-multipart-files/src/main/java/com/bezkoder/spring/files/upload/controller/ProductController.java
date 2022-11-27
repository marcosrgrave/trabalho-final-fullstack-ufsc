package com.bezkoder.spring.files.upload.controller;

import java.net.URI;
import java.util.List;
import java.util.Map;

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

import com.bezkoder.spring.files.upload.model.Product;
import com.bezkoder.spring.files.upload.service.ProductService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

	@Autowired
	private ProductService produtoService;

	@PutMapping(value = "/produtos/{id}")
	public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product produto) {
		Product produtoAtualizado = produtoService.update(id, produto);
		return ResponseEntity.ok().body(produtoAtualizado);
	}

	@DeleteMapping(value = "/produtos/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id) {
		produtoService.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PostMapping(value = "/produtos")
	public ResponseEntity<Product> save(@RequestBody Product produto) {
		Product produtosSaved = produtoService.save(produto);

		URI uri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/produtos/{id}")
				.buildAndExpand(produtosSaved.getId()).toUri();

		return ResponseEntity.created(uri).body(produtosSaved);
	}

	@PostMapping("/produtos/setCategoria")
	public void add(@RequestBody Map<String, Long> payload) {
		Long idProduto = payload.get("idProduto");
		Long idCategoria = payload.get("idCategoria");
		produtoService.setCategory(idProduto, idCategoria);
	}

	@GetMapping(value = "/produtos")
	public ResponseEntity<List<Product>> findAll() {

		List<Product> produtos = produtoService.findAll();
		return ResponseEntity.ok().body(produtos);
	}

	@GetMapping(value = "/produtos/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id) {

		Product c = produtoService.findById(id);
		return ResponseEntity.ok().body(c);

	}

}
