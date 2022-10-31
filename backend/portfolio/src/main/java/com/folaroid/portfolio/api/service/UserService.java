package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.User;
import com.folaroid.portfolio.db.repository.IntroRepository;
import com.folaroid.portfolio.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.folaroid.portfolio.api.dto.UserDto.*;

@RequiredArgsConstructor
@Service
public class UserService {

    private final IntroRepository introRepository;
    private final UserRepository userRepository;

    /** 마이페이지 - 필수 정보 */
    @Transactional
    public Long save(UserNoReq request) {
        Intro intro = new Intro();
        intro.SaveDefaultUserInfo(request.getUserNo());
        return introRepository.save(intro).getIntroNo();
    }

//    @Transactional(readOnly = true)
//    public UserDefaultDto findById(UserNoReq request) {
//        User user = userRepository.findById(request.getUserNo()).get();
//        return new UserDefaultDto(user);
//    }


}
