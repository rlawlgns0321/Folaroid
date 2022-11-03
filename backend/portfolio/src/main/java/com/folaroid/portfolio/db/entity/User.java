package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

    @Column(length = 40)
    private String userEmail;

    public void save(String userGithubId, String userEmail) {
        this.userGithubId = userGithubId;
        this.userEmail = userEmail;
    }
}
