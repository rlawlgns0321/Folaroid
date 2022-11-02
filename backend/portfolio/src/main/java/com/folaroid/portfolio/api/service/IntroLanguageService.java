package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroLanguageDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroLanguage;
import com.folaroid.portfolio.db.repository.IntroLanguageRepository;
import com.folaroid.portfolio.db.repository.IntroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;


@RequiredArgsConstructor
@Service
public class IntroLanguageService {

    private final IntroLanguageRepository introLanguageRepository;
    private final IntroRepository introRepository;
    @Transactional
    public Long save(IntroLanguageDto.IntroLanguageDetail request) {
        IntroLanguage introLanguage = new IntroLanguage();
        Intro intro = introRepository.findById(request.getIntroNo()).get();
        Date date = Date.valueOf(request.getLanguageDate());
        introLanguage.saveIntroLanguage(intro, request.getLanguageName(), request.getLanguageTestName(), request.getLanguageGrade(), date);
        return introLanguageRepository.save(introLanguage).getIntroLanguageNo();
    }
    @Transactional
    public IntroLanguage find(IntroLanguageDto.IntroLanguageNo request) {
        return introLanguageRepository.findById(request.getIntroLanguageNo()).get();
    }
    @Transactional
    public void delete(Long introLanguageNo) {
        introLanguageRepository.deleteById(introLanguageNo);
    }


}
