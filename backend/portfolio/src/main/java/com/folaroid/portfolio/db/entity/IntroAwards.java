package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class IntroAwards {

    @Id @GeneratedValue
    //@Column(name = "intro_awards_id")
    private Long introAwardsId;

    private Long introNo;
    private String awardsName;
    private LocalDateTime awardsDate;
    private String awardsIssuer;

    @Lob
    //@Column(name = "awards_detail", length=512)
    private String awardsDetail;
}
