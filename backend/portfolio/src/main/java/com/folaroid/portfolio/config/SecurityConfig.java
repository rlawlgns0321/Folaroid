//package com.folaroid.portfolio.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.HttpStatusEntryPoint;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
//        http.authorizeExchange()
//                .pathMatchers(
//                        "/v2/api-docs",
//                        "/swagger-ui/**",
//                        "/swagger-resources/**",
//                        "/*/swagger-resources/**",
//                        "/*/v2/api-docs")
//                .permitAll()
//                .and()
//                .authorizeExchange()
//                .anyExchange()
//                .permitAll();
//        http.httpBasic().disable();
//        http.csrf().disable();
//        return http.build();
//    }
//
//
//}