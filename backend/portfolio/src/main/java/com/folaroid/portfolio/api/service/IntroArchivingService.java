package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.db.entity.IntroArchiving;

public interface IntroArchivingService {
    Long saveIntroArchiving(IntroArchivingDto.IntroArchivingDetail request);

}
