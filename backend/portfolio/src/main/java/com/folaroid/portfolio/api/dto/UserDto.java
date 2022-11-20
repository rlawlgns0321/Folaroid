package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.IntroPersonalData;
import com.folaroid.portfolio.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class UserNoReq {
        private Long userNo;
    }

    @Getter
    @AllArgsConstructor
    public static class UserSignupReq {
        private String userGithubId;
        private String userEmail;
    }

    @Getter
    @AllArgsConstructor
    public static class UserLoginReq {
        private String userGithubId;
    }

    @Getter
    @AllArgsConstructor
    public static class UserDefaultDto {
        private Long userNo;
        private String userGithubId;
        private String userName;
        private java.sql.Date userBirth;
        private String userEmail;
        private String userPhone;
        public UserDefaultDto(User user, IntroPersonalData introPersonalData) {
            this.userNo = user.getUserNo();
            this.userGithubId= user.getUserGithubId();
            this.userName= introPersonalData.getPersonalDataName();
            this.userBirth= introPersonalData.getPersonalDataBirth();
            this.userEmail= introPersonalData.getPersonalDataEmail();
            this.userPhone= introPersonalData.getPersonalDataPhone();
        }

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class UserDefaultForUpdateDto {
        private Long introNo;
        private String userName;
        private java.sql.Date userBirth;
        private String userPhone;
        private String userEmail;

    }

}
