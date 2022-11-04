package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import com.folaroid.portfolio.db.repository.IntroArchivingRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service("introArchivingService")
public class IntroArchivingServiceImpl implements IntroArchivingService {
    @Autowired
    IntroArchivingRepository introArchivingRepository;
    @Autowired
    IntroRepository introRepository;


    @Transactional
    @Override
    public Long saveIntroArchiving(IntroArchivingDto.introArchivingRequest introArchivingRequest) {
        return introArchivingRepository.save(introArchivingRequest.toEntity(introRepository.findById(introArchivingRequest.getIntroNo()).get())).getIntroArchivingNo();
    }

    @Transactional
    @Override
    public void deleteIntroArchiving(Long introArchivingNo) {
        IntroArchiving introArchiving = introArchivingRepository.findById(introArchivingNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 링크가 없습니다."));
        introArchivingRepository.delete(introArchiving);
    }

    @Transactional
    @Override
    public List<IntroArchiving> findIntroArchiving(Long introNo) {
        return introArchivingRepository.findAllByIntro(introRepository.findById(introNo).get());
    }

}



