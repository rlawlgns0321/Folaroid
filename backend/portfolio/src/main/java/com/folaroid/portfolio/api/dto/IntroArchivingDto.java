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
        private Intro intro;
        private String archivingName;
        private String archivingLink;

        public IntroArchiving toEntity(){
            IntroArchiving introArchiving = IntroArchiving.builder()
                    .introArchivingNo(introArchivingNo)
                    .intro(intro)
                    .archivingName(archivingName)
                    .archivingLink(archivingLink)
                    .build();
            return introArchiving;
        }

    }

    @Getter
    public static class introArchivingResponse{
        private Long introArchivingNo;
        private Long intro;
        private String archivingName;
        private String archivingLink;

        public introArchivingResponse(IntroArchiving introArchiving){
            this.introArchivingNo = introArchiving.getIntroArchivingNo();
            this.intro = introArchiving.getIntro().getIntroNo();
            this.archivingName = introArchiving.getArchivingName();
            this.archivingLink = introArchiving.getArchivingLink();
        }
    }
}
