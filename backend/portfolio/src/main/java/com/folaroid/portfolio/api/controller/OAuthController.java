package com.folaroid.portfolio.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@PropertySource("classpath:application-security.properties")
public class OAuthController {

    private RestTemplate restTemplate = new RestTemplate();
    private final String REDIRECT_URI = "http://127.0.0.1:3000/login/oauth2/code/github";
    Logger logger = LoggerFactory.getLogger(OAuthController.class);
    @Value("${client-id}")
    private String clientId;
   /* @Value("${client-secret}")
    private String clientSecret;
    private String buildURI(String authorizationCode) {


        String endpoint = "https://github.com/login/oauth/access_token";

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(endpoint)
                .queryParam("client_id", clientId)
                .queryParam("client_secret", clientSecret)
                .queryParam("code", authorizationCode);

        System.out.println(builder.toUriString());
        return builder.toUriString();
    }*/
    @GetMapping("/login/oauth2/code/github")
    public String getAuthorizationCode(String code) throws JsonProcessingException {
        System.out.println("===== authorizationCode : " + code);
        return "===== authorizationCode : " + code;
    }

 /*   @PostMapping("/getAccessToken")
    public String getToken(@RequestParam("code") String authorizationCode) {
        System.out.println("===== authorizationCode : " + authorizationCode);
        return restTemplate.getForObject(buildURI(authorizationCode), String.class);
    }*/
}
