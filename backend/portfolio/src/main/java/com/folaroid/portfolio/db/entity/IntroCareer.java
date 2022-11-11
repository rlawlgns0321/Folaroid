package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroCareer {

    @Id @GeneratedValue
    @Column(name="intro_career_no")
    private Long introCareerNo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "career_com_name", length = 50)
    private String careerComName;

    @Column(name = "career_job", length = 50)
    private String careerJob;

    @Column(name = "career_date")
    private String careerDate;

    @Column(name = "career_result", columnDefinition = "TEXT")
    private String careerResult;

    @Column(name = "career_detail", columnDefinition = "TEXT")
    private String careerDetail;

    public IntroCareer(Intro intro) {
        this.intro = intro;
    }

    public void saveOtherData(String careerComName, String careerJob, String careerDate, String careerResult, String careerDetail) {
        this.careerComName = careerComName;
        this.careerJob = careerJob;
        this.careerDate = careerDate;
        this.careerResult = careerResult;
        this.careerDetail = careerDetail;
    }
}
