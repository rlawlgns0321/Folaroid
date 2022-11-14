package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.IntroImage;
import lombok.*;

public class IntroImageDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introImageRequest{
        private Long introImageNo;
        private String introImageLocation;
        private Long introNo;

        public IntroImage toEntity(){
            IntroImage introImage = IntroImage.builder()
                    .introImageNo(introImageNo)
                    .introImageLocation(introImageLocation)
                    .introNo(introNo)
                    .build();
            return introImage;
        }
    }
    @Getter
    public static class IntroImageResponse {
        private String introImageLocation;
        private Long introNo;

        public IntroImageResponse(Long introNo, String introImageLocation){
            this.introNo = introNo;
            this.introImageLocation = introImageLocation;
//            this.intro = introImage.getIntro();
        }
    }
}
