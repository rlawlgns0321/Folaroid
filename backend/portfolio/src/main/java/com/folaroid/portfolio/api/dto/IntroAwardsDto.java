package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroAwards;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class IntroAwardsDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introAwardsRequest{
        private Long introAwardsNo;
        private Long introNo;
        private String awardsName;
        private java.sql.Date awardsDate;
        private String awardsIssuer;
        private String awardsDetail;

        public IntroAwards toEntity(Intro intro){
            IntroAwards introAwards = IntroAwards.builder()
                    .introAwardsNo(introAwardsNo)
                    .introNo(introNo)
                    .awardsName(awardsName)
                    .awardsDate(awardsDate)
                    .awardsIssuer(awardsIssuer)
                    .awardsDetail(awardsDetail)
                    .build();
            return introAwards;
        }
    }

    public static class introAwardsResponse{
        private Long introAwardsNo;
        private Long introNo;
        private String awardsName;
        private java.sql.Date awardsDate;
        private String awardsIssuer;
        private String awardsDetail;

        public introAwardsResponse(IntroAwards introAwards){
            this.introAwardsNo = introAwards.getIntroAwardsNo();
            this.introNo = introAwards.getIntroNo();
            this.awardsName = introAwards.getAwardsName();
            this.awardsDate = introAwards.getAwardsDate();
            this.awardsIssuer = introAwards.getAwardsIssuer();
            this.awardsDetail = introAwards.getAwardsDetail();
        }
    }
}
