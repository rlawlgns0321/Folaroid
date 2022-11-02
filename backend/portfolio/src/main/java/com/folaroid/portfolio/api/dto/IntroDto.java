package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroImage;
import com.folaroid.portfolio.db.entity.IntroPersonalData;
import lombok.*;

public class IntroDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request{
        private Long introNo;
        private String introContent;
        private Long userNo;
        private Long pfNo;
        private Long portfolioTemplatesNo;
        private IntroImage introImage;
        private IntroPersonalData introPersonalData;

        public Intro toEntity(){
            Intro intro = Intro.builder()
                    .introNo(introNo)
                    .introContent(introContent)
                    .userNo(userNo)
                    .pfNo(pfNo)
                    .portfolioTemplatesNo(portfolioTemplatesNo)
                    .introImage(introImage)
                    .introPersonalData(introPersonalData)
                    .build();
            return intro;
        }
    }

    @Getter
    public static class Response{
        private Long introNo;
        private String introContent;
        private Long userNo;
        private Long pfNo;
        private Long portfolioTemplatesNo;
        private IntroImage introImage;
        private IntroPersonalData introPersonalData;

        public Response(Intro intro){
            this.introNo = intro.getIntroNo();
            this.introContent = intro.getIntroContent();
            this.userNo = intro.getUserNo();
            this.pfNo = intro.getPfNo();
            this.portfolioTemplatesNo = intro.getPortfolioTemplatesNo();
            this.introImage = intro.getIntroImage();
            this.introPersonalData = intro.getIntroPersonalData();
        }
    }
}
