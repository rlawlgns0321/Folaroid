package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
public class IntroPersonalData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long introPersonalDataNo;

    @Column(length = 50)
    private String personalDataName;

    private java.sql.Date personalDataBirth;

    @Column(length = 40)
    private String personalDataEmail;

    @Column(length = 15)
    private String personalDataPhone;

    @OneToOne(mappedBy = "introImage", fetch = LAZY)
    private Intro intro;
}

