package com.folaroid.portfolio.api.dto;


import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroActivity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class IntroActivityDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introActivityRequest{
        private Long introActivityNo;
        private Long introNo;
        private String activityName;
        private String activityDate;
        private String activityUrl;
        private String activityDetail;

        public IntroActivity toEntity(Intro intro){
            IntroActivity introActivity = IntroActivity.builder()
                    .introActivityNo(introActivityNo)
                    .introNo(introNo)
                    .activityName(activityName)
                    .activityDate(activityDate)
                    .activityUrl(activityUrl)
                    .activityDetail(activityDetail)
                    .build();
            return introActivity;
        }

    }
    @Data
    @AllArgsConstructor
    public static class AllIntroActivityDto{
        private Long introActivityNo;
        private String activityName;
        private String activityDate;
        private String activityUrl;
        private String activityDetail;

        public AllIntroActivityDto(IntroActivity introActivity){
            this.introActivityNo = introActivity.getIntroActivityNo();
            this.activityName = introActivity.getActivityName();
            this.activityDate = introActivity.getActivityDate();
            this.activityUrl = introActivity.getActivityUrl();
            this.activityDetail = introActivity.getActivityDetail();
        }
    }

}
