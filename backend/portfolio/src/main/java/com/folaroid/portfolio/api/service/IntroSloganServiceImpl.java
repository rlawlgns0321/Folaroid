package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSloganDto;
import com.folaroid.portfolio.db.entity.IntroSlogan;
import com.folaroid.portfolio.db.repository.IntroRepository;
import com.folaroid.portfolio.db.repository.IntroSloganRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IntroSloganServiceImpl implements IntroSloganService{
    @Autowired
    IntroSloganRepository introSloganRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroSlogan(IntroSloganDto.introSloganRequest introSloganRequest) {
        return introSloganRepository.save(introSloganRequest.toEntity(introRepository.findById(introSloganRequest.getIntroNo()).get())).getIntroSloganNo();
    }

    @Transactional
    @Override
    public void deleteIntroSlogan(Long introSloganNo) {
        IntroSlogan introSlogan = introSloganRepository.findById(introSloganNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 슬로건이 없습니다."));
        introSloganRepository.delete(introSlogan);
    }

    @Transactional
    @Override
    public IntroSlogan findIntroSlogan(Long introNo) {
        return introSloganRepository.findAllByIntroNo(introNo);
    }
}
