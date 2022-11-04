package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroActivityDto;
import com.folaroid.portfolio.db.entity.IntroActivity;

import java.util.List;

public interface IntroActivityService {
    Long saveIntroActivity(IntroActivityDto.introActivityRequest introActivityRequest);
    void deleteIntroActivity(Long introActivityNo);

    List<IntroActivity> findIntroActivity(Long introNo);
}
