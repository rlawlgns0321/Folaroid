package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
public class Intro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long introNo;

    @Column(length = 1000)
    private String introContent;

    private long userNo;

    private long pfNo;

    private long portfolioTemplatesNo;


    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_image_no")
    private IntroImage introImage;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_personal_data_no")
    private IntroPersonalData introPersonalData;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_stack_no")
    private IntroStack introStack;

    @OneToOne(fetch = LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_language_no")
    private IntroLanguage introLanguage;

}
