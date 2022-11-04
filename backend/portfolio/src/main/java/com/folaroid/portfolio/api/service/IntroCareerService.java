package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCareerDto;
import com.folaroid.portfolio.db.entity.IntroCareer;

import java.util.List;

public interface IntroCareerService {
    Long saveIntroCareer(IntroCareerDto.introCareerRequest introCareerRequest);
    void deleteIntroCareer(Long introCareerNo);
    List<IntroCareer> findIntroCareer(Long introNo);
}
