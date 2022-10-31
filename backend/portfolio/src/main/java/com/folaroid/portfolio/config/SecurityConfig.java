package com.folaroid.portfolio.config;


import com.folaroid.portfolio.api.service.OAuthService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //http.httpBasic().disable();
        http.csrf().disable();
    }

    private final OAuthService oAuthService;

    public SecurityConfig(OAuthService oAuthService) {
        this.oAuthService = oAuthService;
    }
    @Bean
    public SecurityFilterChain FilterChain(HttpSecurity http) throws Exception {
        http.oauth2Login()
                .userInfoEndpoint()
                .userService(oAuthService);
        return http.build();
    }
}