package com.folaroid.portfolio.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.api.service.IntroService;
import com.folaroid.portfolio.api.service.UserService;
import com.folaroid.portfolio.api.vo.GithubRepo;
import com.folaroid.portfolio.api.vo.GithubUser;
import com.folaroid.portfolio.api.vo.OAuthToken;
import com.folaroid.portfolio.db.entity.*;
import com.folaroid.portfolio.db.repository.IntroImageRepository;
import com.folaroid.portfolio.db.repository.IntroPersonalDataRepository;
import com.folaroid.portfolio.db.repository.IntroSloganRepository;
import com.folaroid.portfolio.db.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.net.URL;
import java.util.*;

@RestController
@PropertySource("classpath:application-security.properties")
@CrossOrigin
public class OAuthController {
    private final String TOKEN_REQUEST_URI = "https://github.com/login/oauth/access_token";

    private final String USER_REQUEST_URI = "https://api.github.com/user";


    Logger logger = LoggerFactory.getLogger(OAuthController.class);
    @Value("${client-id}")
    private String clientId;
    @Value("${client-secret}")
    private String clientSecret;

    @Autowired
    private UserService userService;

    @Autowired
    private IntroService introService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IntroPersonalDataRepository introPersonalDataRepository;

    @Autowired
    private IntroImageRepository introImageRepository;

    @Autowired
    private IntroSloganRepository introSloganRepository;


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
       }
       else{
//            System.out.println("New User!!");
            Long createUserPk = userService.save(new UserDto.UserSignupReq(responseUserInfo.getLogin(), responseUserInfo.getEmail()));
            map.put("user", userRepository.findByUserGithubId(responseUserInfo.getLogin()));
            IntroDto.introRequest introDto = new IntroDto.introRequest();
            introDto.setUserNo(createUserPk);
            Intro intro = introService.createIntro(introDto);
            Long introNo = intro.getIntroNo();
            IntroPersonalData introPersonalData = new IntroPersonalData(introNo);
            introPersonalDataRepository.save(introPersonalData);
            map.put("introNo", introNo);
           IntroImage introImage = new IntroImage(introNo, responseUserInfo.getAvatar_url());
           introImageRepository.save(introImage);
           IntroSlogan introSlogan = new IntroSlogan(introNo);
           introSloganRepository.save(introSlogan);
       }
        /*
       OAuthToken testToken = new OAuthToken();
       testToken.setAccessToken(responseToken.getAccessToken());

       String requestReposUrl = responseUserInfo.getRepos_url();
       RestTemplate restTemplate = new RestTemplate();

       ResponseEntity<List<GithubRepo>> userInfoResponse = restTemplate.exchange(
               requestReposUrl,
               HttpMethod.GET,
               getUserInfoEntity(responseToken),
               new ParameterizedTypeReference<List<GithubRepo>>() {}
       );

       if (userInfoResponse.getBody() != null) {
           for (int i = 0 ; i < userInfoResponse.getBody().size() ; i++) {
                System.out.println(userInfoResponse.getBody().get(i).getName());
                System.out.println(userInfoResponse.getBody().get(i).getDescription());
                System.out.println(userInfoResponse.getBody().get(i).getCreated_at());
                System.out.println("=================================");
           }
       }*/

       /*if (userInfoResponse.getBody() != null) {
           for (int i = 0; i < userInfoResponse.getBody().size(); i++) {
               if (userInfoResponse.getBody().get(i).getName().equals("PLEX")) {
                   GithubRepo target = userInfoResponse.getBody().get(i);
                   //"https://raw.githubusercontent.com/rlawlgns0321/PLEX/master/README.md";
                   String targetReadme = "https://raw.githubusercontent.com/" + responseUserInfo.getLogin()
                           + "/" + target.getName()
                           + "/" + target.getDefault_branch()
                           + "/README.md";
                   target.setReadmeContent(readmeTest.getMDContent(targetReadme).get("md"));
                   List<String> imageUrls = new ArrayList<>(readmeTest.getMDContent(targetReadme).get("image"));
                   Collections.copy(imageUrls, readmeTest.getMDContent(targetReadme).get("image"));

                   for (int j = 0; j < imageUrls.size(); j++) {
                       if (!imageUrls.get(j).substring(0, 8).equals("https://")
                               && !imageUrls.get(j).substring(0, 7).equals("http://")) {
                           imageUrls.set(j, "https://github.com/"
                                   + responseUserInfo.getLogin() + "/"
                                   + target.getName() + "/raw/"
                                   + target.getDefault_branch() + "/"
                                   + imageUrls.get(j));
                       }
                   }

                   target.setImagesUrl(imageUrls);
                   for (int j = 0; j < target.getImagesUrl().size(); j++)
                       System.out.println(target.getImagesUrl().get(j));
               }
           }
       }*/
       //System.out.println(responseToken.getAccessToken());
       //System.out.println(responseToken.getTokenType());
       //System.out.println(responseToken.getBearer());
       //System.out.println(responseToken.getScope());
       //System.out.println(responseUserInfo.getAvatar_url());
       //System.out.println(responseUserInfo.getRepos_url());
       //System.out.println(responseUserInfo.getPublic_repos());
       return map;
   }

    @GetMapping("/repos")
    public List<GithubRepo> getRepos(@RequestHeader("Authorization") String accessToken, HttpServletResponse res) throws JsonProcessingException {
        OAuthToken responseToken = new OAuthToken();
        responseToken.setAccessToken(accessToken);
        GithubUser responseUserInfo = getUserInfo(responseToken);

        String requestReposUrl = responseUserInfo.getRepos_url();
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<List<GithubRepo>> userInfoResponse = restTemplate.exchange(
                requestReposUrl,
                HttpMethod.GET,
                getUserInfoEntity(responseToken),
                new ParameterizedTypeReference<List<GithubRepo>>() {}
        );

        return userInfoResponse.getBody();
    }

    @GetMapping("/repo")
    public GithubRepo getRepo(@RequestParam("pjt_id") String id, @RequestHeader("Authorization") String accessToken, HttpServletResponse res) throws JsonProcessingException {
        OAuthToken responseToken = new OAuthToken();
        responseToken.setAccessToken(accessToken);
        GithubUser responseUserInfo = getUserInfo(responseToken);

        String requestReposUrl = responseUserInfo.getRepos_url();

        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<List<GithubRepo>> userInfoResponse = restTemplate.exchange(
                requestReposUrl,
                HttpMethod.GET,
                getUserInfoEntity(responseToken),
                new ParameterizedTypeReference<List<GithubRepo>>() {}
        );

        if (userInfoResponse.getBody() != null) {
            for (int i = 0; i < userInfoResponse.getBody().size(); i++) {
                if (id.equals(userInfoResponse.getBody().get(i).getId())) {
                    GithubRepo target = userInfoResponse.getBody().get(i);
                    String targetReadme = "https://raw.githubusercontent.com/" + responseUserInfo.getLogin()
                            + "/" + target.getName()
                            + "/" + target.getDefault_branch()
                            + "/README.md";
                    target.setReadmeContent(readmeTest.getMDContent(targetReadme).get("md"));
                    List<String> imageUrls;
                    if (readmeTest.getMDContent(targetReadme).get("image") != null) {
                        imageUrls = new ArrayList<>(readmeTest.getMDContent(targetReadme).get("image"));
                        Collections.copy(imageUrls, readmeTest.getMDContent(targetReadme).get("image"));

                        for (int j = 0; j < imageUrls.size(); j++) {
                            if (!imageUrls.get(j).substring(0, 8).equals("https://")
                                    && !imageUrls.get(j).substring(0, 7).equals("http://")) {
                                imageUrls.set(j, "https://github.com/"
                                        + responseUserInfo.getLogin() + "/"
                                        + target.getName() + "/raw/"
                                        + target.getDefault_branch() + "/"
                                        + imageUrls.get(j));
                            }
                        }

                        target.setImagesUrl(imageUrls);
                    }
                    return target;
                }
            }
        }

        return null;

    }

    String getBase64(String exampleUrl){
       try {
           URL url = new URL(exampleUrl);
           BufferedImage img = ImageIO.read(url);
           // URL을 통해 File 생성
           File file = new File("downloaded.jpg");
           ImageIO.write(img, "png", file);

           InputStream finput = new FileInputStream(file);
           byte[] imageBytes = new byte[(int) file.length()];
           finput.read(imageBytes, 0, imageBytes.length);
           finput.close();
           String filePathName = exampleUrl.replace("file:///", "");
           String fileExtName = filePathName.substring(filePathName.lastIndexOf(".") + 1);
           // Base64
           String imageStr = Base64.getEncoder().encodeToString(imageBytes);
           // 밑에 changeString은 img 태그안에 쓰이는 용입니다. 위에만 참고하셔도 괜찮아요!
           String changeString = "data:image/"+ fileExtName +";base64, "+ imageStr;
           return changeString;
       }catch (Exception e) {
           e.printStackTrace();
       }
        return null;
    }
}
