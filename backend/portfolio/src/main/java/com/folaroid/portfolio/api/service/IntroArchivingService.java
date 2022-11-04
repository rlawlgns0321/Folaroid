package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.db.entity.IntroArchiving;

import java.util.List;

public interface IntroArchivingService {
    Long saveIntroArchiving(IntroArchivingDto.introArchivingRequest introArchivingRequest);
    void deleteIntroArchiving(Long introArchivingNo);

    List<IntroArchivingDto.introArchivingResponse> readAllIntroArchiving(Long zz);
}
