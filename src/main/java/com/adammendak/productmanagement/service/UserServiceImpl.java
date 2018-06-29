package com.adammendak.productmanagement.service;

import com.adammendak.productmanagement.exception.ResourceNotFoundException;
import com.adammendak.productmanagement.model.User;
import com.adammendak.productmanagement.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findOneById(Long id) throws ResourceNotFoundException {
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()) {
            return user.get();
        } else {
            throw new ResourceNotFoundException("User with id " + id + " does not exist");
        }
    }

    public List<User> findAllUsers() {
        logger.info("getting all users");
        return userRepository.findAll();
    }
}
