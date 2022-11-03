package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.vo.GithubUser;
import com.folaroid.portfolio.api.vo.OAuthToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
//@RestController
//@PropertySource("classpath:application-security.properties")
@RequiredArgsConstructor
public class GithubAPIUserController {

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
        //System.out.println("get User Info Success?");
        //userService.save(new UserSignupReq(userInfoResponse.getBody().getLogin(), userInfoResponse.getBody().getEmail()));
        //System.out.println("get User Info Success!");
        return userInfoResponse.getBody();

    }
}
