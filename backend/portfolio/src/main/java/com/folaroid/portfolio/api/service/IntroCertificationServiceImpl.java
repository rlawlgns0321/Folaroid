package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroCertificationDto;
import com.folaroid.portfolio.db.entity.IntroCertification;
import com.folaroid.portfolio.db.repository.IntroCertificationRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IntroCertificationServiceImpl implements IntroCertificationService{
    @Autowired
    IntroCertificationRepository introCertificationRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public Long saveIntroCertification(IntroCertificationDto.introCertificationRequest introCertificationRequest) {
        return introCertificationRepository.save(introCertificationRequest.toEntity(introRepository.findById(introCertificationRequest.getIntroNo()).orElseThrow(() -> new IllegalAccessError("유효하지 않은 introNo 입니다.")))).getIntroCertificationNo();
    }

    @Transactional
    @Override
    public void deleteIntroCertification(Long introCertificationNo) {
        IntroCertification introCertification = introCertificationRepository.findById(introCertificationNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 자격증이 없습니다."));
        introCertificationRepository.delete(introCertification);
    }

    @Transactional
    @Override
    public List<IntroCertification> findIntroCertification(Long introNo) {
        return introCertificationRepository.findAllByIntroNo(introNo);
    }
}
