package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroImage;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class IntroImageDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request{
        private Long introImageNo;
        private String introImageLocation;
        private Intro intro;

        public IntroImage toEntity(){
            IntroImage introImage = IntroImage.builder()
                    .introImageNo(introImageNo)
                    .introImageLocation(introImageLocation)
//                    .intro(intro)
                    .build();
            return introImage;
        }
    }

    public static class Response{
        private Long introImageNo;
        private String introImageLocation;
        private Intro intro;

        public Response(IntroImage introImage){
            this.introImageNo = introImage.getIntroImageNo();
            this.introImageLocation = introImage.getIntroImageLocation();
//            this.intro = introImage.getIntro();
        }
    }
}
