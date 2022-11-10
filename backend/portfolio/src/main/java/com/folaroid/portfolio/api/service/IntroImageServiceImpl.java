package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroImageDto;
import com.folaroid.portfolio.db.entity.IntroImage;
import com.folaroid.portfolio.db.repository.IntroImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("introImageService")
public class IntroImageServiceImpl implements IntroImageService{
    @Autowired
    IntroImageRepository introImageRepository;

    public IntroImageDto.IntroImageResponse findIntroImage(Long introNo) {
        return new IntroImageDto.IntroImageResponse(introNo, introImageRepository.findByIntroNo(introNo).getIntroImageLocation());
    }
//    @Override
//    public void putIntroImage(Long introNo, IntroImageDto.Request introImageRequest) {
//        IntroImage introImage = introImageRepository.findById(introNo).orElseThrow(()->
//                new IllegalArgumentException("해당하는 자기소개가 존재하지 않습니다."));
//        introImage.putIntroImage(introImageRequest.getIntroImageLocation());
//    }
}
