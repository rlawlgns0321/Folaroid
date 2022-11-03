package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSchoolDto;

public interface IntroSchoolService {
    Long saveIntroSchool(IntroSchoolDto.introSchoolRequest introSchoolRequest);
    void deleteIntroSchool(Long introSchoolNo);
}
