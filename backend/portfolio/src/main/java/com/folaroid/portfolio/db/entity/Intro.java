package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Intro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long introNo;

    @Column(length = 1000)
    private String introContent;

    private Long userNo;
    private Long pfNo;

    public void SaveDefaultUserInfo(long userNo) {
        this.userNo = userNo;
    }

    public void SavePortfolioInfo(Long pfNo, Long userNo) {
        this.pfNo = pfNo;
        this.userNo = userNo;
    }

    public Intro (Intro intro) {
        this.introContent = intro.getIntroContent();
        this.userNo = intro.getUserNo();
        this.pfNo = intro.getPfNo();
    }

    public void SavePfNo(Long pfNo) {
        this.pfNo = pfNo;
    }
}
