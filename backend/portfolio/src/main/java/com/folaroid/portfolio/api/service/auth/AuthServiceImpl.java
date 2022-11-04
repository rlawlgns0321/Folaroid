package com.folaroid.portfolio.api.service.auth;
/*
import com.folaroid.portfolio.db.entity.User;
import com.folaroid.portfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final SaltUtil saltUtil;

    //private final RedisUtil redisUtil;
    private final JwtUtil jwtUtil;

    //회원가입
//    @Override
//    public void signUpUser(UserRegisterReq sellerRegisterReq){
//        User user = new User();
//        user.setUserId(sellerRegisterReq.getSellerId());
//        user.setUserName(sellerRegisterReq.getSellerName());
//        user.setUserPhone(sellerRegisterReq.getSellerPhone());
//
//        String password = sellerRegisterReq.getUserPwd();
//        String salt = saltUtil.genSalt();
//        seller.setSalt(new Salt(salt));
//        seller.setSellerPwd(saltUtil.encodePassword(salt, password));
//        sellerRepository.save(seller);
//    }
//
//    //로그인
//    @Override
//    public Seller loginSeller(String sellerId, String sellerPwd) throws Exception {
//        Seller seller = sellerRepository.findBySellerId(sellerId);
//        if (seller == null) throw new Exception("아이디가 틀립니다.");
//        String salt = seller.getSalt().getSalt();
//        sellerPwd = saltUtil.encodePassword(salt, sellerPwd);
//        if (!seller.getSellerPwd().equals(sellerPwd))
//            throw new Exception("비밀번호가 틀립니다.");
//        return seller;
//    }

    @Override
    public void logout(String accessToken, String refreshToken) {
        //redisUtil.setBlackList(accessToken, "accessToken", jwtUtil.getExpiration(accessToken));
    }

}*/
