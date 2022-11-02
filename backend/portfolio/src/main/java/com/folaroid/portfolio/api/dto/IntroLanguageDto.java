package com.folaroid.portfolio.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

public class IntroLanguageDto {

    @Getter
    @AllArgsConstructor
    public static class IntroLanguageNo {
        private Long introLanguageNo;
    }


    @Getter
    @AllArgsConstructor
    public static class IntroLanguageDetail {
        private Long introNo;
        private String languageName;
        private String languageTestName;
        private String languageGrade;
        private String languageDate;}

}
