package com.folaroid.portfolio.db.entity;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroActivity {

    @Id @GeneratedValue
    @Column(name = "intro_activity_no")
    private Long introActivityNo;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "activity_name", length = 50)
    private String activityName;

    @Column(name = "activity_date")
    private String activityDate;

    @Column(name = "activity_url", length = 2083)
    private String activityUrl;

    @Column(name = "activity_detail", columnDefinition = "TEXT")
    private String activityDetail;
}
