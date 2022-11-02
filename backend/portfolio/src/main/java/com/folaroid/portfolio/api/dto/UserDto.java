package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.IntroStack;
import com.folaroid.portfolio.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class UserNoReq {
        private Long userNo;
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

        private List<IntroStack> introStack;
        public User toEntity() {
            return new User(userNo, userGithubId, userName, userBirth, userEmail, userPhone);
        }

//        public UserDefaultDto(User user) {
//            this.userNo = user.getUserNo();
//            this.userGithubId = user.getUserGithubId();
//            this.userName = user.getUserName();
//            this.userBirth = user.getUserBirth();
//            this.userEmail = user.getUserEmail();
//            this.userPhone = user.getUserPhone();
//            this.introStack = user.getUserNo().stream()
//                    .map(o -> new HashTagDto(o))
//                    .collect(Collectors.toList());
//
//        }
    }
}
