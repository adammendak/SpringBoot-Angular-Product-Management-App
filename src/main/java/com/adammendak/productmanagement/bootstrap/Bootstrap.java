package com.adammendak.productmanagement.bootstrap;

import com.adammendak.productmanagement.model.Product;
import com.adammendak.productmanagement.model.mapper.ProductMapper;
import com.adammendak.productmanagement.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class Bootstrap implements CommandLineRunner{

    private final Logger logger = LoggerFactory.getLogger(Bootstrap.class);
    private final ProductRepository productRepository;

    public Bootstrap(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... strings) throws Exception {

        Product product1 = new Product();
        product1.setName("Hammer");
        product1.setCode("TBX-0048");
        product1.setReleaseDate("May 21, 2016");
        product1.setDescription("Curved claw steel hammer");
        product1.setPrice(BigDecimal.valueOf(8.9D));
        product1.setStarRating(4.8D);
        product1.setImageUrl("http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");

        productRepository.save(product1);

        logger.info("adding product {} into DB", product1.getName());

        Product product2 = new Product();
        product2.setName("Garden Cart");
        product2.setCode("GDN-0023");
        product2.setReleaseDate("March 18, 2016");
        product2.setDescription("15 gallon capacity rolling garden cart");
        product2.setPrice(BigDecimal.valueOf(32.99D));
        product2.setStarRating(4.2D);
        product2.setImageUrl("http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");

        productRepository.save(product2);

        logger.info("adding product {} into DB", product2.getName());

    }
}
