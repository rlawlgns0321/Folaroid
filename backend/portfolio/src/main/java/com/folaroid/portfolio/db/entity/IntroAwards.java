package com.folaroid.portfolio.db.entity;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroAwards {

    @Id @GeneratedValue
    @Column(name = "intro_awards_no")
    private Long introAwardsNo;
    private Long introNo;

    @Column(name = "awards_name", length = 50)
    private String awardsName;

    @Column(name = "awards_date")
    private java.sql.Date awardsDate;

    @Column(name = "awards_issuer", length = 50)
    private String awardsIssuer;

    @Column(name = "awards_detail", columnDefinition = "TEXT")
    private String awardsDetail;

    public IntroAwards(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(String awardsName, java.sql.Date awardsDate, String awardsIssuer, String awardsDetail) {
        this.awardsName = awardsName;
        this.awardsDate = awardsDate;
        this.awardsIssuer = awardsIssuer;
        this.awardsDetail = awardsDetail;
    }
}
