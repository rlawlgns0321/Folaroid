package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.db.entity.User;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class OAuthService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {


    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService userService = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = userService.loadUser(userRequest); //oAuthService(Github)에서 가져온 유저정보 로드

        String registrationId = userRequest.getClientRegistration().getRegistrationId(); //oAuthService 이름 = Github
        String userAttributeName = userRequest.getClientRegistration().getProviderDetails()
                                                .getUserInfoEndpoint().getUserNameAttributeName(); //oAuthService(Github)에서의 unique 필드값
        Map<String, Object> attributes = oAuth2User.getAttributes(); //oAuth 유저 정보
        return null;
    }
}
