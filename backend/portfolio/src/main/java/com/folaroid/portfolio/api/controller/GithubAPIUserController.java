package com.folaroid.portfolio.api.controller;


//import org.springframework.context.annotation.PropertySource;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.api.service.UserService;
import com.folaroid.portfolio.api.vo.GithubUser;
import com.folaroid.portfolio.api.vo.OAuthToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import static com.folaroid.portfolio.api.dto.UserDto.*;
//@RestController
//@PropertySource("classpath:application-security.properties")
@RestController
@RequiredArgsConstructor
public class GithubAPIUserController {

    private final UserService userService;

    private final String USER_REQUEST_URI = "https://api.github.com/user";
    private HttpEntity<MultiValueMap<String, String>> getUserInfoEntity(OAuthToken oAuthToken) {
        HttpHeaders userInfoRequestHeaders = new HttpHeaders();
        userInfoRequestHeaders.add("Authorization", "token " + oAuthToken.getAccessToken());
        return new HttpEntity<>(userInfoRequestHeaders);
    }

    private GithubUser getUserInfo(OAuthToken oAuthToken)  {

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<GithubUser> userInfoResponse = restTemplate.exchange(
                USER_REQUEST_URI,
                HttpMethod.GET,
                getUserInfoEntity(oAuthToken),
                GithubUser.class
        );
        userService.save(new UserSignupReq(userInfoResponse.getBody().getLogin(), userInfoResponse.getBody().getEmail()));
        return userInfoResponse.getBody();

    }
}
