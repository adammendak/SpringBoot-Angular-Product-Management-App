package com.adammendak.productmanagement.controller;

import com.adammendak.productmanagement.model.Product;
import com.adammendak.productmanagement.model.dto.ProductDto;
import com.adammendak.productmanagement.model.mapper.ProductMapper;
import com.adammendak.productmanagement.repository.ProductRepository;
import com.adammendak.productmanagement.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/product")
@CorsFilters
public class ProductController {

    private final Logger logger = LoggerFactory.getLogger(ProductController.class);
    private ProductRepository productRepository;
    private ProductService productService;

    public ProductController(ProductRepository productRepository, ProductService productService) {
        this.productRepository = productRepository;
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity getAllTheProducts(){
        List<Product> listOfAllProducts = productService.findAll();
        if(listOfAllProducts.size() != 0) {
            logger.info("returning all products, size of array {}", listOfAllProducts.size());
            return ResponseEntity.status(HttpStatus.OK).body(listOfAllProducts);
        } else {
            logger.info("no products in DB");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No objects in the DB");
        }
    }

    @GetMapping(
            value = "/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity getProduct(@PathVariable Long id) {
        Optional<Product> product = productService.findOneById(id);

        if(product.isPresent()) {
//            uncomment spring-boot-hateoas
//            Resource<Product> productResource = new Resource<>(product.get());
//            ControllerLinkBuilder linkTo = ControllerLinkBuilder
//                    .linkTo(ControllerLinkBuilder.methodOn(this.getClass()).getAllTheProducts());
//            productResource.add(linkTo.withRel("all-products"));
//            return ResponseEntity.status(HttpStatus.OK).body(productResource);
            //todo dodac uri do zwracanych dto
            String location = ServletUriComponentsBuilder.fromCurrentRequest().toUriString();
            logger.info("Uri location {}", location);
            ProductDto productDto = ProductMapper.INSTANCE.productToProductDto(product.get());
            productDto.setUri(location);
            logger.info(" product DTO {}", productDto);
            return ResponseEntity.status(HttpStatus.OK).body(product.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("no product with given id");
        }
    }

    @DeleteMapping
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        Optional<Product> productOptional = productRepository.findById(id);
        if(productOptional.isPresent()) {
            logger.info("deleting product {}", productOptional.get().getName());
            productRepository.delete(id);
            return ResponseEntity.status(HttpStatus.OK).body("product deleted");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("product not in DB");

        }
    }

    @PutMapping
    public ResponseEntity updateProduct(@Valid @RequestBody ProductDto productDto) {
        //TODO create productDTO
        return ResponseEntity.status(HttpStatus.OK).body("in progress");
    }

    @PostMapping
    public ResponseEntity createNewProduct(@Valid @RequestBody Product product) {
        logger.info("saving product {}", product.getName());
        try {
            Product savedProduct = productRepository.save(product);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
        } catch (Exception e) {
            logger.info("exception occured {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
