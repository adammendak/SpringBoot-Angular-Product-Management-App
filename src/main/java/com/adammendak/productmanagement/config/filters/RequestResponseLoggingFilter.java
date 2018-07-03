package com.adammendak.productmanagement.config.filters;

import lombok.extern.slf4j.Slf4j;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
@Order(1)
@Slf4j
public class RequestResponseLoggingFilter implements javax.servlet.Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) servletRequest;
        log.info("Logging request: {} {}", req.getMethod(), req.getRequestURI() );
        req.getParameterMap()
                .forEach((key, value) -> log.info("Logging parameters: key {}", key, "values {}", value ));
        filterChain.doFilter(servletRequest,servletResponse);

        log.info("Logging response type: {}" , servletResponse.getContentType());
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void destroy() {

    }
}
