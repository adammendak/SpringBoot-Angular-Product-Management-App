package com.adammendak.productmanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CorsFilters
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }

//    some test for local git config
//    some test for local git config
//    some test for local git config
}
