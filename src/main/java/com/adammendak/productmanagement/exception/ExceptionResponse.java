package com.adammendak.productmanagement.exception;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionResponse {

    @JsonProperty(value = "time_stamp")
    private Date timeStamp;
    private String message;
    private String details;
}
