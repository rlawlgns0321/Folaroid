package com.folaroid.portfolio.api.controller;


//import org.springframework.context.annotation.PropertySource;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.api.vo.GithubUser;
import com.folaroid.portfolio.api.vo.OAuthToken;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

//@RestController
//@PropertySource("classpath:application-security.properties")
public class GithubAPIUserController {

    private final String USER_REQUEST_URI = "https://api.github.com/user";
    private HttpEntity<MultiValueMap<String, String>> getUserInfoEntity(OAuthToken oAuthToken) {
        HttpHeaders userInfoRequestHeaders = new HttpHeaders();
        userInfoRequestHeaders.add("Authorization", "token " + oAuthToken.getAccessToken());
        return new HttpEntity<>(userInfoRequestHeaders);
    }

    private GithubUser getUserInfo(OAuthToken oAuthToken) throws JsonProcessingException {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> userInfoResponse = restTemplate.exchange(
                USER_REQUEST_URI,
                HttpMethod.GET,
                getUserInfoEntity(oAuthToken),
                String.class
        );

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(userInfoResponse.getBody(), GithubUser.class);

    }
}
