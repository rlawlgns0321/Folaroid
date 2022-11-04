package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroSchoolDto;
import com.folaroid.portfolio.db.entity.IntroSchool;

import java.util.List;

public interface IntroSchoolService {
    Long saveIntroSchool(IntroSchoolDto.introSchoolRequest introSchoolRequest);
    void deleteIntroSchool(Long introSchoolNo);
    List<IntroSchool> findIntroSchool(Long introNo);
}
