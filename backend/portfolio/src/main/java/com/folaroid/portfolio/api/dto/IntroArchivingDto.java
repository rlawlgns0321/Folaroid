package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import lombok.*;

public class IntroArchivingDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introArchivingRequest{
        private Long introArchivingNo;
        private Long introNo;
        private String archivingName;
        private String archivingLink;

        public IntroArchiving toEntity(Intro intro){
            IntroArchiving introArchiving = IntroArchiving.builder()
                    .introArchivingNo(introArchivingNo)
                    .introNo(introNo)
                    .archivingName(archivingName)
                    .archivingLink(archivingLink)
                    .build();
            return introArchiving;
        }

    }

    @Getter
    public static class introArchivingResponse{
        private Long introArchivingNo;
        private Long introNo;
        private String archivingName;
        private String archivingLink;

        public introArchivingResponse(IntroArchiving introArchiving){
            this.introArchivingNo = introArchiving.getIntroArchivingNo();
            this.introNo = introArchiving.getIntroNo();
            this.archivingName = introArchiving.getArchivingName();
            this.archivingLink = introArchiving.getArchivingLink();
        }
    }
}

