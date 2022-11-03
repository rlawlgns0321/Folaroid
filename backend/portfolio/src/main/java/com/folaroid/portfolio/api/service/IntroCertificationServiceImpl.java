package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCertificationDto;
import com.folaroid.portfolio.db.entity.IntroCertification;
import com.folaroid.portfolio.db.repository.IntroCertificationRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;

public class IntroCertificationServiceImpl implements IntroCertificationService{
    @Autowired
    IntroCertificationRepository introCertificationRepository;

    @Transactional
    @Override
    public Long saveIntroCertification(IntroCertificationDto.introCertificationRequest introCertificationRequest) {
        return introCertificationRepository.save(introCertificationRequest.toEntity()).getIntroCertificationNo();
    }

    @Transactional
    @Override
    public void deleteIntroCertification(Long introCertificationNo) {
        IntroCertification introCertification = introCertificationRepository.findById(introCertificationNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 자격증이 없습니다."));
        introCertificationRepository.delete(introCertification);
    }
}
