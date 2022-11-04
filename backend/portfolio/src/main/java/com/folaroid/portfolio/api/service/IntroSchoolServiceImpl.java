package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSchoolDto;
import com.folaroid.portfolio.db.entity.IntroSchool;
import com.folaroid.portfolio.db.repository.IntroRepository;
import com.folaroid.portfolio.db.repository.IntroSchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IntroSchoolServiceImpl implements IntroSchoolService{
    @Autowired
    IntroSchoolRepository introSchoolRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroSchool(IntroSchoolDto.introSchoolRequest introSchoolRequest) {
        return introSchoolRepository.save(introSchoolRequest.toEntity(introRepository.findById(introSchoolRequest.getIntroNo()).get())).getIntroSchoolNo();
    }

    @Transactional
    @Override
    public void deleteIntroSchool(Long introSchoolNo) {
        IntroSchool introSchool = introSchoolRepository.findById(introSchoolNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 학력이 없습니다."));
        introSchoolRepository.delete(introSchool);
    }

    @Transactional
    @Override
    public List<IntroSchool> findIntroSchool(Long introNo) {
        return introSchoolRepository.findAllByIntro(introRepository.findById(introNo).get());
    }
}
