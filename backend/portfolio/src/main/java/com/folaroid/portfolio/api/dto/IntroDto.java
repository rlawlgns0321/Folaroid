package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.*;
import lombok.*;

import java.util.List;

public class IntroDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introRequest{
        private Long introNo;
        private String introContent;
        private Long userNo;
        private Long pfNo;
//        private Long portfolioTemplatesNo;
//        private IntroImage introImage;
//        private IntroPersonalData introPersonalData;

        public Intro toEntity(){
            Intro intro = Intro.builder()
                    .introNo(introNo)
                    .introContent(introContent)
                    .userNo(userNo)
                    .pfNo(pfNo)
//                    .portfolioTemplatesNo(portfolioTemplatesNo)
//                    .introImage(introImage)
//                    .introPersonalData(introPersonalData)
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
//        private Long portfolioTemplatesNo;
//        private IntroImage introImage;
//        private IntroPersonalData introPersonalData;

        public Response(Intro intro){
            this.introNo = intro.getIntroNo();
            this.introContent = intro.getIntroContent();
            this.userNo = intro.getUserNo();
            this.pfNo = intro.getPfNo();
//            this.portfolioTemplatesNo = intro.getPortfolioTemplatesNo();
//            this.introImage = intro.getIntroImage();
//            this.introPersonalData = intro.getIntroPersonalData();
        }
    }



    @Getter
    @AllArgsConstructor
    public static class IntroNoDto {
        private Long introNo;
    }

    @Getter
    @AllArgsConstructor
    public static class AllIntroDto {
        private Long introNo;
        private String introContent;
        private List<IntroImage> introImages;
        private List<IntroPersonalData> introPersonalData;
        private List<IntroStack> introStacks;
        private List<IntroLanguage> introLanguages;
        private List<IntroArchiving> introArchivings;
        private List<IntroCertification> introCertifications;
        private List<IntroAwards> introAwards;
        private List<IntroActivity> introActivities;
        private List<IntroCareer> introCareers;
        private List<IntroSchool> introSchools;
        private List<IntroSlogan> introSlogans;


        public AllIntroDto(Intro intro,
                           List<IntroImage> introImages,
                           List<IntroPersonalData> introPersonalData,
                           List<IntroStack> introStacks,
                           List<IntroLanguage> introLanguages,
                           List<IntroArchiving> introArchivings,
                           List<IntroCertification> introCertifications,
                           List<IntroAwards> introAwards,
                           List<IntroActivity> introActivities,
                           List<IntroCareer> introCareers,
                           List<IntroSchool> introSchools,
                           List<IntroSlogan> introSlogans) {
            this.introNo = intro.getIntroNo();
            this.introContent = intro.getIntroContent();
            this.introImages = introImages;
            this.introPersonalData = introPersonalData;
            this.introStacks = introStacks;
            this.introLanguages = introLanguages;
            this.introArchivings = introArchivings;
            this.introCertifications = introCertifications;
            this.introAwards = introAwards;
            this.introActivities = introActivities;
            this.introCareers = introCareers;
            this.introSchools = introSchools;
            this.introSlogans = introSlogans;
        }


    }

}
