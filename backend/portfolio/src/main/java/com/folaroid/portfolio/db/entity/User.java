package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userNo;

    @Column(length = 60)
    private String userGithubId;

    @Column(length = 10)
    private String userName;

    private java.sql.Date userBirth;

    @Column(length = 40)
    private String userEmail;

    @Column(length = 15)
    private String userPhone;
}
