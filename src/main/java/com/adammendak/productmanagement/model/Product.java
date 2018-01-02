package com.adammendak.productmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "product_name")
    private String name;

    @Column(name = "product_code")
    private String code;

    @Column(name = "release_date")
    private String releaseDate;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private BigDecimal price;

    @Min(1)
    @Max(5)
    @Column(name = "star_rating")
    private Integer starRating;

    @Column(name = "image_url")
    private String imageUrl;

}
