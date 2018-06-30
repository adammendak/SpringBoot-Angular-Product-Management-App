package com.adammendak.productmanagement.controller;

import org.springframework.context.annotation.Profile;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Profile(value = "dev")
@CrossOrigin(value = "https://productmanagement-adammendak.herokuapp.com")
public @interface CorsFilterDev {
}
