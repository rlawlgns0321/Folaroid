package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroAwardsDto;
import com.folaroid.portfolio.db.entity.IntroAwards;

import java.util.List;

public interface IntroAwardsService {
    Long saveIntroAwards(IntroAwardsDto.introAwardsRequest introAwardsRequest);
    void deleteIntroAwards(Long introAwardsNo);

    List<IntroAwards> findIntroAwards(Long introNo);
}
