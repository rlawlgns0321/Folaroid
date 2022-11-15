package com.folaroid.portfolio.db.entity;

import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroActivity {

    @Id @GeneratedValue
    @Column(name = "intro_activity_no")
    private Long introActivityNo;

//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "intro_no")
    private Long introNo;

    @Column(name = "activity_name", length = 50)
    private String activityName;

    @Column(name = "activity_date")
    private String activityDate;

    @Column(name = "activity_url", length = 2083)
    private String activityUrl;

    @Column(name = "activity_detail", columnDefinition = "TEXT")
    private String activityDetail;

    public IntroActivity(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(String activityName, String activityDate, String activityUrl, String activityDetail) {
        this.activityName = activityName;
        this.activityDate = activityDate;
        this.activityUrl = activityUrl;
        this.activityDetail = activityDetail;

    }
}
