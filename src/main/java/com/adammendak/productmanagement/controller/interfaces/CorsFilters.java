package com.adammendak.productmanagement.controller.interfaces;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@HerokuCrossOrigin
@CorsFilterDev
@ReactCorsFilterDev
public @interface CorsFilters {
}
