package com.folaroid.portfolio.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.api.service.UserService;
import com.folaroid.portfolio.api.vo.GithubUser;
import com.folaroid.portfolio.api.vo.OAuthToken;
import com.folaroid.portfolio.db.entity.User;
import com.folaroid.portfolio.db.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@RestController
@PropertySource("classpath:application-security.properties")
@CrossOrigin
public class OAuthController {
    private final String REDIRECT_URI = "http://127.0.0.1:3000/callback";
    private final String TOKEN_REQUEST_URI = "https://github.com/login/oauth/access_token";

    private final String USER_REQUEST_URI = "https://api.github.com/user";
    private final String USER_SIGNUP_URI = "http://127.0.0.1:3000/signup"; //must update when getting final domain

    Logger logger = LoggerFactory.getLogger(OAuthController.class);
    @Value("${client-id}")
    private String clientId;
    @Value("${client-secret}")
    private String clientSecret;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    private HttpEntity<MultiValueMap<String, String>> getCodeRequestEntity(String code) {

        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("client_id", clientId);
        param.add("client_secret", clientSecret);
        param.add("code", code);

        HttpHeaders header = new HttpHeaders();
        header.add("Accept", "application/json");
        return new HttpEntity<>(param, header);
    }

    private HttpEntity<MultiValueMap<String, String>> getSignUpRequestEntity(String id, String email) {

        MultiValueMap<String, String> param = new LinkedMultiValueMap<>();
        param.add("user_github_id", id);
        param.add("user_email", email);

        HttpHeaders header = new HttpHeaders();
        header.add("Accept", "application/json");
        return new HttpEntity<>(param, header);
    } //signup request

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

    public static ReadmeController readmeTest = new ReadmeController();
   @GetMapping("/callback")
   public Map<String, Object> getLogin(@RequestParam String code, HttpServletResponse res) throws JsonProcessingException {
       OAuthToken responseToken = getOAuthToken(code);
       GithubUser responseUserInfo = getUserInfo(responseToken);
       HashMap<String, Object> map = new HashMap<>();
        map.put("jwt", responseToken.getAccessToken());
       User user = userRepository.findByUserGithubId(responseUserInfo.getLogin());
       if (user != null) {
           map.put("user",user);
           //return map;
       }else{
            userService.save(new UserDto.UserSignupReq(responseUserInfo.getLogin(), responseUserInfo.getEmail()));
            map.put("user", userRepository.findByUserGithubId(responseUserInfo.getLogin()));
            //return map;
       }
      /* RestTemplate restTemplate = new RestTemplate();
       HttpEntity<MultiValueMap<String, String>> signUpRequestEntity = getSignUpRequestEntity(responseUserInfo.getLogin(), responseUserInfo.getEmail());
       ResponseEntity<Integer> userNoResponse = restTemplate.exchange(
               USER_SIGNUP_URI,
               HttpMethod.POST,
               signUpRequestEntity,
               Integer.class
       );

       int userNo = userNoResponse.getBody().intValue();*/
        // manage "/signup" post request at backend -> activate when needed
       //map.put("jwt", responseToken.getAccessToken());
       //map.put("github_id", responseUserInfo.getLogin());
       //map.put("email", responseUserInfo.getEmail());
       //map.put("user_no", user_no);
       ArrayList<String> tmp = readmeTest.getMDContent("https://raw.githubusercontent.com/rlawlgns0321/Escape101/master/README.md");

       System.out.println(tmp.size());
       for (int i = 0 ; i < tmp.size() ; i++) {
           System.out.println(tmp.get(i));
           System.out.println("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
       }
       System.out.println(responseToken.getAccessToken());
       System.out.println(responseUserInfo.getAvatar_url());
       System.out.println(responseUserInfo.getRepos_url());
       System.out.println(responseUserInfo.getPublic_repos());
       return map;
   }
}
