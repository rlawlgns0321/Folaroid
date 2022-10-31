package com.folaroid.portfolio.api.service.auth;

import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

@Service
public class CookieUtil {

    public ResponseCookie createCookie(String cookieName, String value, int idx){
        if (idx == 0) {
            return ResponseCookie.from(cookieName, value)
                    .path("/").sameSite("none").domain("i7a602.p.ssafy.io").secure(true).httpOnly(true).maxAge((int) JwtUtil.TOKEN_VALIDATION_SECOND).build();
        } else {
            return ResponseCookie.from(cookieName, value)
                    .path("/").sameSite("none").domain("i7a602.p.ssafy.io").secure(true).httpOnly(true).maxAge((int) JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND).build();
        }

    }

    public ResponseCookie deleteCookie(String cookieName) {
        return ResponseCookie.from(cookieName, null)
                .path("/").sameSite("none").domain("i7a602.p.ssafy.io").secure(true).httpOnly(true).maxAge(0).build();
    }

}
