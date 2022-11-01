package com.folaroid.portfolio.db.entity;

import lombok.Builder;
import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Builder
public class IntroPersonalData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_personal_data_no")
    private long introPersonalDataNo;

    @Column(length = 50)
    private String personalDataName;

    private java.sql.Date personalDataBirth;

    @Column(length = 40)
    private String personalDataEmail;

    @Column(length = 15)
    private String personalDataPhone;

    @OneToOne(mappedBy = "introPersonalData", fetch = LAZY)
    private Intro intro;
}

