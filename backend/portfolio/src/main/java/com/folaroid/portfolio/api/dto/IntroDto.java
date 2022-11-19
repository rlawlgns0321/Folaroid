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
    @AllArgsConstructor
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
        private IntroImageDto.AllIntroImageDto introImage;
        private IntroPersonalDataDto.Response introPersonalData;
        private List<IntroStackDto.AllIntroStackDto> introStacks;
        private List<IntroLanguageDto.AllIntroLanguageDto> introLanguages;
        private List<IntroArchivingDto.AllIntroArchivingDto> introArchivings;
        private List<IntroCertificationDto.AllIntroCertificationDto> introCertifications;
        private List<IntroAwardsDto.AllIntroAwardsDto> introAwards;
        private List<IntroActivityDto.AllIntroActivityDto> introActivities;
        private List<IntroCareerDto.AllIntroCareerDto> introCareers;
        private List<IntroSchoolDto.AllIntroSchoolDto> introSchools;
        private IntroSloganDto.AllIntroSloganDto introSlogan;


        public AllIntroDto(Intro intro,
                           IntroImageDto.AllIntroImageDto introImage,
                           IntroPersonalDataDto.Response introPersonalData,
                           List<IntroStackDto.AllIntroStackDto> introStacks,
                           List<IntroLanguageDto.AllIntroLanguageDto> introLanguages,
                           List<IntroArchivingDto.AllIntroArchivingDto> introArchivings,
                           List<IntroCertificationDto.AllIntroCertificationDto> introCertifications,
                           List<IntroAwardsDto.AllIntroAwardsDto> introAwards,
                           List<IntroActivityDto.AllIntroActivityDto> introActivities,
                           List<IntroCareerDto.AllIntroCareerDto> introCareers,
                           List<IntroSchoolDto.AllIntroSchoolDto> introSchools,
                           IntroSloganDto.AllIntroSloganDto introSlogan) {

            this.introNo = intro.getIntroNo();
            this.introContent = intro.getIntroContent();
            this.introImage = introImage;
            this.introPersonalData = introPersonalData;
            this.introStacks = introStacks;
            this.introLanguages = introLanguages;
            this.introArchivings = introArchivings;
            this.introCertifications = introCertifications;
            this.introAwards = introAwards;
            this.introActivities = introActivities;
            this.introCareers = introCareers;
            this.introSchools = introSchools;
            this.introSlogan = introSlogan;
        }


    }

}
