package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroLanguage;
import lombok.*;

public class IntroLanguageDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introLanguageRequest{
        private Long introLanguageNo;
        private String languageName;
        private String languageTestName;
        private String languageGrade;
        private String languageDate;
        private Long introNo;

        public IntroLanguage toEntity(Intro intro){
            IntroLanguage introLanguage = IntroLanguage.builder()
                    .introLanguageNo(introLanguageNo)
                    .languageName(languageName)
                    .languageTestName(languageTestName)
                    .languageGrade(languageGrade)
                    .languageDate(languageDate)
                    .intro(intro)
                    .build();
            return introLanguage;
        }
    }

    public static class introLanguageResponse{
        private Long introLanguageNo;
        private String languageName;
        private String languageTestName;
        private String languageGrade;
        private String languageDate;
        private Long introNo;

        public introLanguageResponse(IntroLanguage introLanguage){
            this.introLanguageNo = introLanguage.getIntroLanguageNo();
            this.languageName = introLanguage.getLanguageName();
            this.languageTestName = introLanguage.getLanguageTestName();
            this. languageGrade = introLanguage.getLanguageGrade();
            this.languageDate = introLanguage.getLanguageDate();
            this.introNo = introLanguage.getIntro().getIntroNo();
        }
    }

}
