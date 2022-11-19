package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
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

    private Long introNo;

    @Column(length = 40)
    private String personalDataEmail;

    public void updateIntroPersonalData(String userName, java.sql.Date userBirth, String userPhone, String userEmail) {
        this.personalDataName = userName;
        this.personalDataBirth = userBirth;
        this.personalDataPhone = userPhone;
        this.personalDataEmail = userEmail;
    }
    public IntroPersonalData(Long introNo) {
        this.introNo = introNo;
    }

    public void updateUserEmail(String userEmail) {
        this.personalDataEmail = userEmail;
    }
}

