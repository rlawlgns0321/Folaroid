package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroPersonalDataDto;
import com.folaroid.portfolio.db.entity.IntroPersonalData;
import com.folaroid.portfolio.db.repository.IntroPersonalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("introPersonalDataService")
public class IntroPersonalDataServiceImpl implements IntroPersonalDataService{
    @Autowired
    IntroPersonalDataRepository introPersonalDataRepository;

    @Override
    public IntroPersonalData createIntroPersonalData(IntroPersonalDataDto.Request introPersonalDataRequest) {
        return introPersonalDataRepository.save(introPersonalDataRequest.toEntity());
    }
}
