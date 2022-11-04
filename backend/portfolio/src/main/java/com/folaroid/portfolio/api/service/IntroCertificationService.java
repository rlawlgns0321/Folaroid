package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCertificationDto;
import com.folaroid.portfolio.db.entity.IntroCertification;

import java.util.List;

public interface IntroCertificationService {
    Long saveIntroCertification(IntroCertificationDto.introCertificationRequest introCertificationRequest);
    void deleteIntroCertification(Long introCertificationNo);
    List<IntroCertification> findIntroCertification(Long introNo);

}
