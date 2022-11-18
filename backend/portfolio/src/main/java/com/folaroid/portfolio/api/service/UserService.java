package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroPersonalData;
import com.folaroid.portfolio.db.entity.User;
import com.folaroid.portfolio.db.repository.IntroPersonalDataRepository;
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
    private final IntroPersonalDataRepository introPersonalDataRepository;

    /** 마이페이지 - 필수 정보 */
    @Transactional
    public Long MakeIntroAndIntroPersonalDataTable(UserNoReq request) {
        Intro intro = new Intro();
        intro.SaveDefaultUserInfo(request.getUserNo());
        Long introNo = introRepository.save(intro).getIntroNo();
        IntroPersonalData introPersonalData = new IntroPersonalData(introNo);
        introPersonalDataRepository.save(introPersonalData);
        return introNo;
    }


    @Transactional(readOnly = true)
    public UserDefaultDto find(Long introNo) {
        Intro intro = introRepository.findById(introNo).orElseThrow(() -> new IllegalAccessError("유효하지 않은 introNo 입니다. 해당 Intro 가 없습니다."));
        IntroPersonalData introPersonalData = introPersonalDataRepository.findByIntroNo(introNo);
        return new UserDefaultDto(userRepository.findById(intro.getUserNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 userNo 입니다.")), introPersonalData);
    }

    @Transactional
    public void put(UserDefaultForUpdateDto request) {
        IntroPersonalData introPersonalData = introPersonalDataRepository.findById(request.getIntroNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 introNo 입니다. 해당 introNo로 저장된 IntroPersonalData가 없습니다."));
        introPersonalData.updateIntroPersonalData(request.getUserName(), request.getUserBirth(), request.getUserPhone(), request.getUserEmail());
    }
    @Transactional
    public Long save(String userGithubId) {
        User user = new User();
        user.save(userGithubId);
        return userRepository.save(user).getUserNo();
    }

    public Long getIntroNo(String userGithubId) {
        User user = userRepository.findByUserGithubId(userGithubId);
        return introRepository.findUserDefaultData(user.getUserNo());
    }
}
