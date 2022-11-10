package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroImageDto;

public interface IntroImageService {
    IntroImageDto.IntroImageResponse findIntroImage(Long introNo);
}
