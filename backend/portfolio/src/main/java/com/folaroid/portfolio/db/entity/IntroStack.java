package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
@Entity
@Getter
public class IntroStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long IntroStackNo;

//    0,1,2로 제한할 것
    private Integer stackLevel;

    @Column(length = 50)
    private String stackContent;

    @OneToOne(mappedBy = "introStack", fetch = LAZY)
    private Intro intro;
}
