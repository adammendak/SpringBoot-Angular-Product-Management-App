package com.adammendak.productmanagement.controller;

import com.adammendak.productmanagement.exception.ResourceNotFoundException;
import com.adammendak.productmanagement.model.User;
import com.adammendak.productmanagement.service.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@Slf4j
@CorsFilterDev
public class UserController {

    private UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity getUserById(@PathVariable Long id) throws ResourceNotFoundException{

        try {
            User userFromDB = userService.findOneById(id);
            return ResponseEntity.status(HttpStatus.CREATED).body(userFromDB);
        } catch (ResourceNotFoundException e) {
            log.info(e.getMessage());
            throw e;
        }
    }
}
