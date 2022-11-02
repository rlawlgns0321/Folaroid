package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import lombok.*;

public class IntroArchivingDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request{
        private Long introArchivingNo;
        private String archivingName;
        private String archivingLink;
        private Intro intro;

        public IntroArchiving toEntity(){
            IntroArchiving introArchiving = IntroArchiving.builder()
                    .introArchivingNo(introArchivingNo)
                    .archivingName(archivingName)
                    .archivingLink(archivingLink)
                    .intro(intro)
                    .build();
            return introArchiving;
        }
    }

    @Getter
    public static class Response{
        private Long introArchivingNo;
        private String archivingName;
        private String archivingLink;
        private Intro intro;

        public Response(IntroArchiving introArchiving){
            this.introArchivingNo = introArchiving.getIntroArchivingNo();
            this.archivingName = introArchiving.getArchivingName();
            this.archivingLink = introArchiving.getArchivingLink();
            this.intro = introArchiving.getIntro();
        }
    }
}
