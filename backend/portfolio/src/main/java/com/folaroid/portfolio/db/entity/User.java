package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userNo;

    @Column(length = 60, unique=true)
    private String userGithubId;

    @Column(length = 10)
    private String userName;

    private java.sql.Date userBirth;

    @Column(length = 40)
    private String userEmail;

    @Column(length = 15)
    private String userPhone;

    public void updateUser(String userGithubId, String userName, Date userBirth, String userEmail, String userPhone) {
        this.userGithubId = userGithubId;
        this.userName = userName;
        this.userBirth = userBirth;
        this.userEmail = userEmail;
        this.userPhone = userPhone;
    }

    public void saveUser(String userGithubId, String userEmail) {
        this.userGithubId = userGithubId;
        this.userEmail = userEmail;
    }

}
