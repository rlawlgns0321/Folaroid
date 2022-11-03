package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.repository.IntroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("introService")
public class IntroServiceImpl implements IntroService{
    @Autowired
    IntroRepository introRepository;

    @Override
    public Intro createIntro(IntroDto.introRequest introRequest) {
        return introRepository.save(introRequest.toEntity());
    }
}
