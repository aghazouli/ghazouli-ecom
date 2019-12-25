package org.mid.ghazouliecom.controllers;

import org.mid.ghazouliecom.entities.Product;
import org.mid.ghazouliecom.repository.ProductRepository;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
public class CatalogueController {

    private ProductRepository productRepository;

    public CatalogueController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping(path = "photoProduct/{id}" , produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception {

        Product p = productRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home") + ("/Desktop/") + p.getPhotoName()));

    }
}
