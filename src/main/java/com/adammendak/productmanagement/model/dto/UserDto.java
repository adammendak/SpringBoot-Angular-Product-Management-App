package com.adammendak.productmanagement.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String id;
    private String username;
    private String email;
    private String password;
    @JsonProperty(value = "created_ad")
    private Date createdAt;
    @JsonProperty(value = "updated_at")
    private Date updatedAt;
}
