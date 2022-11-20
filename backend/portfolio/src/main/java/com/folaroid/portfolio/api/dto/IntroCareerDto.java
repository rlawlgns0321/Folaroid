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
                    .introNo(introNo)
                    .careerComName(careerComName)
                    .careerJob(careerJob)
                    .careerDate(careerDate)
                    .careerResult(careerResult)
                    .careerDetail(careerDetail)
                    .build();
            return introCareer;
        }
    }

    @Data
    @AllArgsConstructor
    public static class AllIntroCareerDto{
        private Long introCareerNo;
        private String careerComName;
        private String careerJob;
        private String careerDate;
        private String careerResult;
        private String careerDetail;

        public AllIntroCareerDto(IntroCareer introCareer){
            this.introCareerNo = introCareer.getIntroCareerNo();
            this.careerComName = introCareer.getCareerComName();
            this.careerJob = introCareer.getCareerJob();
            this.careerDate = introCareer.getCareerDate();
            this.careerResult = introCareer.getCareerResult();
            this.careerDetail = introCareer.getCareerDetail();
        }

    }
}
