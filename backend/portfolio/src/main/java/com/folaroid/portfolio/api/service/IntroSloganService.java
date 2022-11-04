package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSloganDto;

public interface IntroSloganService {
    Long saveIntroSlogan(IntroSloganDto.introSloganRequest introSloganRequest);
    void deleteIntroSlogan(Long introSloganNo);
}
