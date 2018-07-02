package com.adammendak.productmanagement.controller;

import com.adammendak.productmanagement.controller.interfaces.CorsFilters;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CorsFilters
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}
