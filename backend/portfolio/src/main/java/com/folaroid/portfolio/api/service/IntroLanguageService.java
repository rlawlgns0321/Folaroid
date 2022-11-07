package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.api.dto.IntroLanguageDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroLanguage;
import com.folaroid.portfolio.db.repository.IntroLanguageRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;


@RequiredArgsConstructor
@Service
public class IntroLanguageService {

    private final IntroLanguageRepository introLanguageRepository;
    private final IntroRepository introRepository;
    @Transactional
    public Long save(IntroLanguageDto.IntroLanguageDetail request) {
        IntroLanguage introLanguage = new IntroLanguage();
        Intro intro = introRepository.findById(request.getIntroNo()).get();
        java.sql.Date date = java.sql.Date.valueOf(request.getLanguageDate());
        introLanguage.saveIntroLanguage(intro, request.getLanguageName(), request.getLanguageTestName(), request.getLanguageGrade(), date);
        return introLanguageRepository.save(introLanguage).getIntroLanguageNo();
    }
    @Transactional
    public List<IntroLanguage> find(Long introNo) {
        return introLanguageRepository.findAllByIntro(introRepository.findById(introNo).get());
    }
    @Transactional
    public void delete(Long introLanguageNo) {
        introLanguageRepository.deleteById(introLanguageNo);
    }


}
