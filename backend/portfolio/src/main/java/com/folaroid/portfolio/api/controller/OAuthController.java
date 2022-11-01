package com.folaroid.portfolio.api.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Controller
@RequestMapping("/login/oauth2/code/github")
@PropertySource("classpath:application-security.properties")
public class OAuthController {

    private RestTemplate restTemplate = new RestTemplate();
    @Value("${client-id}")
    private String clientId;
    @Value("${client-secret}")
    private String clientSecret;
    private String buildURI(String authorizationCode) {
        String endpoint = "https://github.com/login/oauth/access_token";

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(endpoint)
                .queryParam("client_id", clientId)
                .queryParam("client_secret", clientSecret)
                .queryParam("code", authorizationCode);

        System.out.println(builder.toUriString());
        return builder.toUriString();
    }
    @GetMapping
    public String sendTokenRequest(@RequestParam("code") String authorizationCode) {
        System.out.println("===== authorizationCode : " + authorizationCode);
        return restTemplate.getForObject(buildURI(authorizationCode), String.class);
    }

 /*   @PostMapping("/getAccessToken")
    public String getToken(@RequestParam("code") String authorizationCode) {
        System.out.println("===== authorizationCode : " + authorizationCode);
        return restTemplate.getForObject(buildURI(authorizationCode), String.class);
    }*/
}
