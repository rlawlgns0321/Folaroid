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

    public static class introActivityResponse{
        private Long introActivityNo;
        private Long introNo;
        private String activityName;
        private String activityDate;
        private String activityUrl;
        private String activityDetail;

        public introActivityResponse(IntroActivity introActivity){
            this.introActivityNo = introActivity.getIntroActivityNo();
            this.introNo = introActivity.getIntroNo();
            this.activityName = introActivity.getActivityName();
            this.activityDate = introActivity.getActivityDate();
            this.activityUrl = introActivity.getActivityUrl();
            this.activityDetail = introActivity.getActivityDetail();
        }
    }

}
