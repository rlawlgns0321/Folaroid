package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.service.auth.AuthService;
import com.folaroid.portfolio.api.service.auth.CookieUtil;
import com.folaroid.portfolio.api.service.auth.JwtUtil;
import com.folaroid.portfolio.api.service.auth.RedisUtil;
import com.folaroid.portfolio.db.entity.User;
import com.folaroid.portfolio.db.repository.UserRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Api(value = "권한api", tags={"권한"})
@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final CookieUtil cookieUtil;
    private final AuthService authService;
    private final JwtUtil jwtUtil;
    private final RedisUtil redisUtil;

    private final UserRepository userRepository;


//    @ApiOperation(value = "회원가입 - 판매자", notes="판매자로 가입한다.",httpMethod = "POST")
//    @PostMapping("/seller/signup")
//    public ResponseSimple signUpSeller(@RequestBody @Valid SellerRegisterReq sellerRegisterReq) {
//        try {
//            authService.signUpUser(userRegisterReq);
//            return new ResponseSimple("success", "판매자 회원가입을 성공적으로 완료했습니다.", null);
//        } catch (Exception e) {
//            return new ResponseSimple("error", "판매자 회원가입에 실패하였습니다.", null);
//        }
//    }
//
//    @ApiOperation(value = "로그인 - 판매자", notes="판매자가 로그인한다.",httpMethod = "POST")
//    @PostMapping("/seller/login")
//    public ResponseSimple loginSeller(@RequestBody RequestLoginUser user,
//                                      HttpServletRequest req,
//                                      HttpServletResponse res) {
//        try {
//            final User user = authService.loginUser(user.getUsername(), user.getPassword());
//            final String token = jwtUtil.generateToken(user);
//            final String refreshJwt = jwtUtil.generateRefreshToken(user);
//            ResponseCookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN_NAME, token, 0);
//            ResponseCookie refreshToken = cookieUtil.createCookie(JwtUtil.REFRESH_TOKEN_NAME, refreshJwt, 1);
//            redisUtil.setDataExpire(refreshJwt, user.getUserId(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);
//            res.setHeader("Set-Cookie",accessToken.toString());
//            res.addHeader("Set-Cookie",refreshToken.toString());
////            res.setHeader("Access-Control-Allow-Origin", "http://localhost:7602");
//            res.setHeader("Access-Control-Allow-Origin", "https://k7a103.p.ssafy.io");
//            return new ResponseSimple("success", "로그인에 성공했습니다.", user.getUserNo());
//        } catch (Exception e) {
//            return new ResponseSimple("error", "로그인에 실패했습니다.", e.getMessage());
//        }
//    }
//
//    @ApiOperation(value = "비밀번호 변경 - 판매자", notes="판매자가 비밀번호를 변경한다.",httpMethod = "PUT")
//    @PutMapping("/seller/change_pwd/{seller_no}")
//    public ResponseSimple changeSellerPassword(
//            @PathVariable("seller_no") Integer sellerNo,
//            @RequestBody ChangePasswordReq changePasswordReq
//    ) {
//        try{
//            User user = userRepository.findOne(sellerNo);
//            authService.changeUserPassword(user, changePasswordReq.getPassword(), changePasswordReq.getPasswordUpdate());
//            return new ResponseSimple("success","성공적으로 사용자의 비밀번호를 변경했습니다.",null);
//        }catch(Exception e){
//            return new ResponseSimple("error","사용자의 비밀번호를 변경할 수 없었습니다.",null);
//        }
//    }
//
//    @ApiOperation(value = "로그아웃", notes="로그아웃을 한다.",httpMethod = "POST")
//    @PostMapping("/logouts")
//    public ResponseSimple logout(@RequestBody @Valid TokenDto requestTokenDto,
//                                 HttpServletRequest req,
//                                 HttpServletResponse res) {
////         1. Access Token 검증
//        if (!jwtUtil.validateToken(requestTokenDto.getAccessToken())) {
//            System.out.println("Accesstoken error");
//            return new ResponseSimple("fail","잘못된 요청입니다.",null);
//        }
//
//        if(!jwtUtil.validateToken(requestTokenDto.getRefreshToken())) {
//            System.out.println("RefreshToken error");
//            return new ResponseSimple("fail","잘못된 요청입니다.",null);
//        }
//
//        if (redisUtil.getBlackList(requestTokenDto.getAccessToken()) != null){
//            return new ResponseSimple("fail","이미 로그아웃된 유저입니다.",null);
//        }
//
//        redisUtil.deleteData(requestTokenDto.getRefreshToken());
//        authService.logout(requestTokenDto.getAccessToken(), requestTokenDto.getRefreshToken());
//
//        ResponseCookie accessToken = cookieUtil.deleteCookie(JwtUtil.ACCESS_TOKEN_NAME);
//        ResponseCookie refreshToken = cookieUtil.deleteCookie(JwtUtil.REFRESH_TOKEN_NAME);
//        res.setHeader("Set-Cookie",accessToken.toString());
//        res.addHeader("Set-Cookie",refreshToken.toString());
////        res.setHeader("Access-Control-Allow-Origin", "http://localhost:7602");
//        res.setHeader("Access-Control-Allow-Origin", "https://k7a103.p.ssafy.io");
//        return new ResponseSimple("success","로그아웃 되었습니다.",null);
//    }
//
//    @ApiOperation(value = "getAccessToken - 판매자", notes="판매자의 accessToken 만료시에 refreshToken의 유효성 검사를 하고 accessToken을 재발급한다.",httpMethod = "POST")
//    @PostMapping("/re-issue/seller/{seller_no}")
//    public ResponseSimple sellerReIssue(@PathVariable("seller_no") Integer sellerNo,
//                                        @RequestBody @Valid RefreshTokenResponse refreshTokenRes,
//                                        HttpServletRequest req,
//                                        HttpServletResponse res) {
//
//        if (redisUtil.getData(refreshTokenRes.getRefreshToken()) == null){
//            return new ResponseSimple("fail","refreshToken error",null);
//        }
//        try {
//            final User user = userRepository.findOne(sellerNo);
//            final String token = jwtUtil.generateToken(user);
//            ResponseCookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN_NAME, token, 0);
//            res.setHeader("Set-Cookie",accessToken.toString());
////            res.setHeader("Access-Control-Allow-Origin", "http://localhost:7602");
//            res.setHeader("Access-Control-Allow-Origin", "https://k7a103.p.ssafy.io");
//            return new ResponseSimple("success", "accessToken 재발급에 성공했습니다.", user.getUserNo());
//        } catch (Exception e) {
//            return new ResponseSimple("error", "accessToken 재발급에 실패했습니다.", null);
//        }
//    }
//
//    @ApiOperation(value = "AccessToken의 유효성 확인", notes="accessToken의 유효성 검사를 한다.",httpMethod = "POST")
//    @PostMapping("/auth")
//    public boolean validation(@RequestBody @Valid AccessTokenResponse accessTokenRes,
//                              HttpServletRequest req,
//                              HttpServletResponse res) {
//
//        if (!jwtUtil.validateToken(accessTokenRes.getAccessToken())) {
//            log.info("잘못된 accessToken 입니다.");
//            return false;
//        } else if (redisUtil.getBlackList(accessTokenRes.getAccessToken()) != null) {
//            log.info("로그아웃된 accessToken 입니다.");
//            return false;
//        }
//        log.info("유효한 accessToken 입니다.");
//        return true;
//    }
//
//    @Data
//    @NoArgsConstructor
//    static class RefreshTokenResponse {
//        private String refreshToken;
//    }
//
//
//    @Data
//    @NoArgsConstructor
//     static class AccessTokenResponse {
//        private String accessToken;
//    }


}


