package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroCertification;
import lombok.*;

public class IntroCertificationDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introCertificationRequest{
        private Long introCertificationNo;
        private String certificationDate;
        private String certificationName;
        private String certificationIssuer;
        private String certificationDetail;
        private String certificationId;

        public IntroCertification toEntity(){
            IntroCertification introCertification = IntroCertification.builder()
                    .introCertificationNo(introCertificationNo)
                    .certificationDate(certificationDate)
                    .certificationName(certificationName)
                    .certificationIssuer(certificationIssuer)
                    .certificationDetail(certificationDetail)
                    .certificationId(certificationId)
                    .build();
            return introCertification;
        }
    }

    @Getter
    public static class introCertificationResponse{
        private Long introCertificationNo;
        private Long intro;
        private String certificationDate;
        private String certificationName;
        private String certificationIssuer;
        private String certificationDetail;
        private String certificationId;

        public introCertificationResponse(IntroCertification introCertification){
            this.introCertificationNo = introCertification.getIntroCertificationNo();
            this.intro = introCertification.getIntro().getIntroNo();
            this.certificationDate = introCertification.getCertificationDate();
            this.certificationName = introCertification.getCertificationName();
            this.certificationIssuer = introCertification.getCertificationIssuer();
            this.certificationDetail = introCertification.getCertificationDetail();
            this.certificationId = introCertification.getCertificationId();
        }
    }
}
