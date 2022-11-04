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

    @Column(length = 15)
    private String personalDataPhone;

    @OneToOne(mappedBy = "introPersonalData", fetch = LAZY)
    private Intro intro;

    public void updateIntroPersonalData(String userName, java.sql.Date userBirth, String userPhone) {
        this.personalDataName = userName;
        this.personalDataBirth = userBirth;
        this.personalDataPhone = userPhone;
    }
    public IntroPersonalData(Intro intro) {
        this.intro = intro;
    }
}

