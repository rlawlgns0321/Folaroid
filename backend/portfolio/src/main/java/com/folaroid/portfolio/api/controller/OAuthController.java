package com.folaroid.portfolio.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.folaroid.portfolio.api.service.auth.JwtUtil;
import com.folaroid.portfolio.api.vo.OAuthToken;
import com.nimbusds.oauth2.sdk.token.AccessToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RestController
@PropertySource("classpath:application-security.properties")
@CrossOrigin
public class OAuthController {
    private final String REDIRECT_URI = "http://127.0.0.1:3000/callback";
    private final String TOKEN_REQUEST_URI = "https://github.com/login/oauth/access_token";

    Logger logger = LoggerFactory.getLogger(OAuthController.class);
    @Value("${client-id}")
    private String clientId;
    @Value("${client-secret}")
    private String clientSecret;

    private HttpEntity<MultiValueMap<String, String>> getCodeRequestEntity(String code) {

        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("client_id", clientId);
        param.add("client_secret", clientSecret);
        param.add("code", code);
        param.add("redirect_url", REDIRECT_URI);

        HttpHeaders header = new HttpHeaders();
        header.add("Accept", "application/json");
        return new HttpEntity<>(param, header);
    }

    private OAuthToken getOAuthToken(String code) throws JsonProcessingException {
        HttpEntity<MultiValueMap<String, String>> codeRequestEntity = getCodeRequestEntity(code);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(TOKEN_REQUEST_URI,
                HttpMethod.POST,
                codeRequestEntity,
                String.class);

        ObjectMapper objectMapper = new ObjectMapper();
        OAuthToken oAuthToken = null;
        return objectMapper.readValue(response.getBody(), OAuthToken.class);
    }
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
   @GetMapping("/callback")
   public Map<String, String> getLogin(String code, HttpServletResponse res) throws JsonProcessingException {
       OAuthToken responseToken = getOAuthToken(code);

       /*ResponseCookie accessTokenCookie = ResponseCookie.from("accessToken", responseToken.getAccessToken())
               .path("/").sameSite("none").domain("127.0.0.1")
               .secure(true).httpOnly(true)
               .maxAge(JwtUtil.TOKEN_VALIDATION_SECOND).build();

       res.setHeader("Set-Cookie", accessTokenCookie.toString()+);*/

       HashMap<String, String> map = new HashMap<>();
       map.put("jwt", responseToken.getAccessToken());
       return map;
   }

 /*   @PostMapping("/getAccessToken")
    public String getToken(@RequestParam("code") String authorizationCode) {
        System.out.println("===== authorizationCode : " + authorizationCode);
        return restTemplate.getForObject(buildURI(authorizationCode), String.class);
    }*/
}
