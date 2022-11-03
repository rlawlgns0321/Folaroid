package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.api.dto.IntroAwardsDto;

public interface IntroAwardsService {
    Long saveIntroAwards(IntroAwardsDto.introAwardsRequest introAwardsRequest);
    void deleteIntroAwards(Long introArchivingNo);
}
