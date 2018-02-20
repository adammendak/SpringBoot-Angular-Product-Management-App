package com.adammendak.productmanagement.service;

import com.adammendak.productmanagement.exception.ResourceNotFoundException;
import com.adammendak.productmanagement.model.User;

import java.util.List;

public interface UserService {

    User findOneById(Long id) throws ResourceNotFoundException;

    List<User> findAllUsers();

}
