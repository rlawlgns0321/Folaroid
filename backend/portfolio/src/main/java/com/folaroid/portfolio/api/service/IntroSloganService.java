package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSloganDto;
import com.folaroid.portfolio.db.entity.IntroSlogan;

import java.util.List;

public interface IntroSloganService {
    Long saveIntroSlogan(IntroSloganDto.introSloganRequest introSloganRequest);
    void deleteIntroSlogan(Long introSloganNo);

    IntroSlogan findIntroSlogan(Long introNo);
}
