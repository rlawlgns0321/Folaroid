package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroCareer;
import lombok.*;

public class IntroCareerDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introCareerRequest{
        private Long introCareerNo;
        private Long introNo;
        private String careerComName;
        private String careerJob;
        private String careerDate;
        private String careerResult;
        private String careerDetail;

        public IntroCareer toEntity(Intro intro){
            IntroCareer introCareer = IntroCareer.builder()
                    .introCareerNo(introCareerNo)
                    .intro(intro)
                    .careerComName(careerComName)
                    .careerJob(careerJob)
                    .careerDate(careerDate)
                    .careerResult(careerResult)
                    .careerDetail(careerDetail)
                    .build();
            return introCareer;
        }
    }

    @Getter
    public static class introCareerResponse{
        private Long introCareerNo;
        private Long introNo;
        private String careerComName;
        private String careerJob;
        private String careerDate;
        private String careerResult;
        private String careerDetail;

        public introCareerResponse(IntroCareer introCareer){
            this.introCareerNo = introCareer.getIntroCareerNo();
            this.introNo = introCareer.getIntro().getIntroNo();
            this.careerComName = introCareer.getCareerComName();
            this.careerJob = introCareer.getCareerJob();
            this.careerDate = introCareer.getCareerDate();
            this.careerResult = introCareer.getCareerResult();
            this.careerDetail = introCareer.getCareerDetail();
        }

    }
}
