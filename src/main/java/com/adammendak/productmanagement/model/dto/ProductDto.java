package com.adammendak.productmanagement.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
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
    @JsonProperty(value = "release_date")
    private String releaseDate;
    @JsonProperty(value = "blockade_date")
    private String blockadeDate;
    private BigDecimal price;
    @JsonProperty(value = "star_rating")
    private Double starRating;
    @JsonProperty(value = "image_url")
    private String imageUrl;

}
