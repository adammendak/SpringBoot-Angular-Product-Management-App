package com.adammendak.productmanagement.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    private Long id;
    private String name;
    private String code;
    private String releaseDate;
    private String blockadeDate;
    private BigDecimal price;
    private Double starRating;
    private String imageUrl;

}
