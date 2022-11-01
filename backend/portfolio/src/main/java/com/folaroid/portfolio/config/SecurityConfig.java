package com.folaroid.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@Configuration
//@EnableWebSecurity
public class SecurityConfig  {
   /* @Override
    protected void configure(HttpSecurity http) throws Exception {
        //http.httpBasic().disable();
        http.csrf().disable();
    }*/

    //private final OAuthService oAuthService;

    /*public SecurityConfig(OAuthService oAuthService) {
        this.oAuthService = oAuthService;
    }*/
    /*@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeRequests(a -> a
                .antMatchers("/", "/error", "/webjars/**").permitAll()
                .anyRequest().authenticated()
        )
                .exceptionHandling(e -> e
                        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                )
                .oauth2Login()
                .and()
                .logout(l -> l
                        .logoutSuccessUrl("/").permitAll())
                .csrf(c -> c
                        .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()));
        return http.build();
    }*/
}