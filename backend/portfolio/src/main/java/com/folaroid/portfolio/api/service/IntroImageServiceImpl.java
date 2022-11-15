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
}
