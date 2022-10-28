package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
@Entity
@Getter
public class IntroImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_image_no")
    private long introImageNo;

    @Column(length = 2083)
    private String introImageLocation;

    @OneToOne(mappedBy = "introImage", fetch = LAZY)
    private Intro intro;
}
