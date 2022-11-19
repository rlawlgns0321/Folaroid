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
        private java.sql.Date languageDate;
        private Long introNo;

        public IntroLanguage toEntity(Intro intro){
            IntroLanguage introLanguage = IntroLanguage.builder()
                    .introLanguageNo(introLanguageNo)
                    .languageName(languageName)
                    .languageTestName(languageTestName)
                    .languageGrade(languageGrade)
                    .languageDate(languageDate)
                    .introNo(introNo)
                    .build();
            return introLanguage;
        }
    }

    @Data
    @AllArgsConstructor
    public static class AllIntroLanguageDto{
        private Long introLanguageNo;
        private String languageName;
        private String languageTestName;
        private String languageGrade;
        private java.sql.Date languageDate;

        public AllIntroLanguageDto(IntroLanguage introLanguage){
            this.introLanguageNo = introLanguage.getIntroLanguageNo();
            this.languageName = introLanguage.getLanguageName();
            this.languageTestName = introLanguage.getLanguageTestName();
            this. languageGrade = introLanguage.getLanguageGrade();
            this.languageDate = introLanguage.getLanguageDate();
        }
    }

}
