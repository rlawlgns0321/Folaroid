package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import com.folaroid.portfolio.db.repository.IntroArchivingRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service("introArchivingService")
public class IntroArchivingServiceImpl implements IntroArchivingService {
    @Autowired
    IntroArchivingRepository introArchivingRepository;
    IntroRepository introRepository;


    @Transactional
    @Override
    public Long saveIntroArchiving(IntroArchivingDto.IntroArchivingDetail request) {
        IntroArchiving introArchiving = new IntroArchiving();
        Intro intro = introRepository.findById(request.getIntroNo()).get();
        introArchiving.saveIntroArchiving(intro, request.getArchivingName(), request.getArchivingLink());
        return introArchivingRepository.save(introArchiving).getIntroArchivingNo();
    }
}



