package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroActivityDto;
import com.folaroid.portfolio.db.entity.IntroActivity;
import com.folaroid.portfolio.db.repository.IntroActivityRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@RequiredArgsConstructor
@Service
public class IntroActivityServiceImpl implements IntroActivityService{
    @Autowired
    IntroActivityRepository introActivityRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroActivity(IntroActivityDto.introActivityRequest introActivityRequest) {
        return introActivityRepository.save(introActivityRequest.toEntity(introRepository.findById(introActivityRequest.getIntroNo()).get())).getIntroActivityNo();
    }

    @Transactional
    @Override
    public void deleteIntroActivity(Long introActivityNo) {
        IntroActivity introActivity = introActivityRepository.findById(introActivityNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 활동이 없습니다."));
        introActivityRepository.delete(introActivity);
    }

    @Transactional
    @Override
    public List<IntroActivity> findIntroActivity(Long introNo) {
        return introActivityRepository.findAllByIntroNo(introNo);
    }
}
