package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
@Entity
@Getter
public class IntroStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_stack_no")
    private long IntroStackNo;

//    0,1,2로 제한할 것
    private Integer stackLevel;

    @Column(length = 50)
    private String stackContent;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    private Long hash_no;
}
