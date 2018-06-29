package com.adammendak.productmanagement.service;

import com.adammendak.productmanagement.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> findAll();
    Optional<Product> findOneById(Long id);
}
