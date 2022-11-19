package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroSlogan;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class IntroSloganDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introSloganRequest{
        private Long introSloganNo;
        private Long introNo;
        private String sloganContent;

        public IntroSlogan toEntity(Intro intro){
            IntroSlogan introSlogan = IntroSlogan.builder()
                    .introSloganNo(introSloganNo)
                    .introNo(introNo)
                    .sloganContent(sloganContent)
                    .build();
            return introSlogan;
        }
    }
    @Data
    @AllArgsConstructor
    public static class AllIntroSloganDto{
        private Long introSloganNo;
        private String sloganContent;

        public AllIntroSloganDto(IntroSlogan introSlogan){
            this.introSloganNo = introSlogan.getIntroSloganNo();
            this.sloganContent = introSlogan.getSloganContent();
        }
    }
}
