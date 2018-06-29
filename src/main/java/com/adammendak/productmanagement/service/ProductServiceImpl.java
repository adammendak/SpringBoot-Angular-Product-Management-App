package com.adammendak.productmanagement.service;

import com.adammendak.productmanagement.model.Product;
import com.adammendak.productmanagement.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    Logger logger = LoggerFactory.getLogger(ProductServiceImpl.class);
    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAll() {
        logger.info("getting all the products");
        return productRepository.findAll();
    }

    public Optional<Product> findOneById(Long id) {
        logger.info("getting single product with id {}", id);
        return productRepository.findById(id);
    }
}
