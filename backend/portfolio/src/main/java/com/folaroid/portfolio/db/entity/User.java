package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="user")
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userNo;

    @Column(length = 60, unique=true)
    private String userGithubId;



    public void save(String userGithubId) {
        this.userGithubId = userGithubId;
    }
}
