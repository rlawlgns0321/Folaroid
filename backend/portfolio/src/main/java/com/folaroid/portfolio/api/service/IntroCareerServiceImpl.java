package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCareerDto;
import com.folaroid.portfolio.db.entity.IntroCareer;
import com.folaroid.portfolio.db.repository.IntroCareerRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IntroCareerServiceImpl implements IntroCareerService{

    @Autowired
    IntroCareerRepository introCareerRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroCareer(IntroCareerDto.introCareerRequest introCareerRequest) {
        return introCareerRepository.save(introCareerRequest.toEntity(introRepository.findById(introCareerRequest.getIntroNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 introNo 입니다.")))).getIntroCareerNo();
    }

    @Transactional
    @Override
    public void deleteIntroCareer(Long introCareerNo) {
        IntroCareer introCareer = introCareerRepository.findById(introCareerNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 경력사항이 없습니다."));
        introCareerRepository.delete(introCareer);
    }

    @Transactional
    @Override
    public List<IntroCareer> findIntroCareer(Long introNo) {
        return introCareerRepository.findAllByIntroNo(introNo);
    }
}
