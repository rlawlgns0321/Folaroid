package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroActivityDto;

public interface IntroActivityService {
    Long saveIntroActivity(IntroActivityDto.introActivityRequest introActivityRequest);
    void deleteIntroActivity(Long introActivityNo);
}
