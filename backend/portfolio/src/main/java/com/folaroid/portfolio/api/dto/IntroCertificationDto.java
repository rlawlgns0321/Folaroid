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
        private Long introNo;
        private java.sql.Date certificationDate;
        private String certificationName;
        private String certificationIssuer;
        private String certificationDetail;
        private String certificationId;

        public IntroCertification toEntity(Intro intro){
            IntroCertification introCertification = IntroCertification.builder()
                    .introCertificationNo(introCertificationNo)
                    .introNo(introNo)
                    .certificationDate(certificationDate)
                    .certificationName(certificationName)
                    .certificationIssuer(certificationIssuer)
                    .certificationDetail(certificationDetail)
                    .certificationId(certificationId)
                    .build();
            return introCertification;
        }
    }

    @Data
    @AllArgsConstructor
    public static class AllIntroCertificationDto{
        private Long introCertificationNo;
        private java.sql.Date certificationDate;
        private String certificationName;
        private String certificationIssuer;
        private String certificationDetail;
        private String certificationId;

        public AllIntroCertificationDto(IntroCertification introCertification){
            this.introCertificationNo = introCertification.getIntroCertificationNo();
            this.certificationDate = introCertification.getCertificationDate();
            this.certificationName = introCertification.getCertificationName();
            this.certificationIssuer = introCertification.getCertificationIssuer();
            this.certificationDetail = introCertification.getCertificationDetail();
            this.certificationId = introCertification.getCertificationId();
        }
    }
}
