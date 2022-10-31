package com.folaroid.portfolio.api.service.auth;

import com.folaroid.portfolio.db.entity.User;

public interface AuthService {

    //회원가입 방법 구체화할 것
//    void signUpUser(UserRegisterReq userRegisterReq);
    //로그인 방법 구체화할 것
//    User loginUser(String userId, String sellerPwd) throws Exception;

//    Seller findBySellerId(String sellerId) throws Exception;

//    Customer findByCustomerId(String customerId) throws Exception;

    void logout(String accessToken, String refreshToken);
}

