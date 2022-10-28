package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private long userNo;
    private String userGithubId;
    private String userName;
    private java.sql.Date userBirth;
    private String userEmail;
    private String userPhone;

    public User toEntity() {
        return new User(userNo, userGithubId, userName, userBirth, userEmail, userPhone);
    }
}
