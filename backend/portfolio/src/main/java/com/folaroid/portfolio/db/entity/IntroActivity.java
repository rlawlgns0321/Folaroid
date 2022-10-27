package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class IntroActivity {

    @Id @GeneratedValue
    //@Column(name = "intro_activity_no")
    private Long introActivityNo;

    private Long introNo;

    private String activityName;
    private LocalDateTime activityDate;

    @Column(length = 2083)
    private String activityUrl;

    @Lob
    //@Column(name = "activity_detail", length=512)
    private String activityDetail;
}
