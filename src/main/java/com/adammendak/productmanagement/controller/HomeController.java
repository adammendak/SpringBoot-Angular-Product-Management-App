package com.adammendak.productmanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@CorsFilterDev
@HerokuCrossOrigin
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}
