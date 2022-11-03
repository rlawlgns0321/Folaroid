package com.folaroid.portfolio.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
@Entity
@Getter
@Builder
public class IntroImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_image_no")
    private long introImageNo;

    @Column(length = 2083)
    private String introImageLocation;

//    @OneToOne(mappedBy = "introImage", fetch = LAZY)
//    private Intro intro;

    public void putIntroImage(String introImageLocation){
        this.introImageLocation = introImageLocation;
    }
}
