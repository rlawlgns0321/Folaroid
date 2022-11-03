package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroAwardsDto;
import com.folaroid.portfolio.db.entity.IntroAwards;
import com.folaroid.portfolio.db.repository.IntroAwardsRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class IntroAwardsServiceImpl implements IntroAwardsService{
    @Autowired
    IntroAwardsRepository introAwardsRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroAwards(IntroAwardsDto.introAwardsRequest introAwardsRequest) {
        return introAwardsRepository.save(introAwardsRequest.toEntity(introRepository.findById(introAwardsRequest.getIntroNo()).get())).getIntroAwardsNo();
    }

    @Transactional
    @Override
    public void deleteIntroAwards(Long introAwardsNo) {
        IntroAwards introAwards = introAwardsRepository.findById(introAwardsNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 자격증이 없습니다."));
        introAwardsRepository.delete(introAwards);
    }
}
