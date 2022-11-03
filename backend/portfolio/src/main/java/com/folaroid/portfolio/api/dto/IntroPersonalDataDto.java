package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroPersonalData;
import lombok.*;

public class IntroPersonalDataDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request{
        private Long introPersonalDataNo;
        private String personalDataName;
        private java.sql.Date personaDataBirth;
        private String personalDataEmail;
        private String personalDataPhone;
        //private Intro intro;

        public IntroPersonalData toEntity(){
            IntroPersonalData introPersonalData = IntroPersonalData.builder()
                    .introPersonalDataNo(introPersonalDataNo)
                    .personalDataName(personalDataName)
                    .personalDataBirth(personaDataBirth)
                    .personalDataPhone(personalDataPhone)
                    //.intro(intro)
                    .build();
            return introPersonalData;
        }
    }

    @Getter
    public static class Response{
        private Long introPersonalDataNo;
        private String personalDataName;
        private java.sql.Date personaDataBirth;
        private String personalDataEmail;
        private String personalDataPhone;
        //private Intro intro;

        public Response(IntroPersonalData introPersonalData){
            this.introPersonalDataNo = introPersonalData.getIntroPersonalDataNo();
            this.personalDataName = introPersonalData.getPersonalDataName();
            this.personaDataBirth = introPersonalData.getPersonalDataBirth();
            this.personalDataPhone = introPersonalData.getPersonalDataPhone();
            //this.intro = introPersonalData.getIntro();
        }

    }
}
