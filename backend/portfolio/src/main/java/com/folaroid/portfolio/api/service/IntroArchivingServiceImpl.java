package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import com.folaroid.portfolio.db.repository.IntroArchivingRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service("introArchivingService")
public class IntroArchivingServiceImpl implements IntroArchivingService {
    @Autowired
    IntroArchivingRepository introArchivingRepository;

    @Override
    @Transactional
    public Long createIntroArchiving(IntroArchivingDto.Request introArchivingDto) {
        IntroArchiving introArchiving = introArchivingDto.toEntity();
        introArchivingRepository.save(introArchiving);
        return introArchiving.getIntroArchivingNo();
    }
}



