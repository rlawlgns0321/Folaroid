package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroPersonalDataDto;
import com.folaroid.portfolio.db.entity.IntroPersonalData;

public interface IntroPersonalDataService {
    IntroPersonalData createIntroPersonalData(IntroPersonalDataDto.Request introPersonalDataRequest);
}
