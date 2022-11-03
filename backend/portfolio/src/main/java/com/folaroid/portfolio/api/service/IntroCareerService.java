package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCareerDto;

public interface IntroCareerService {
    Long saveIntroCareer(IntroCareerDto.introCareerRequest introCareerRequest);
    void deleteIntroCareer(Long introCareerNo);
}
