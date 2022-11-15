package com.folaroid.portfolio.db.entity;

import lombok.*;
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
    private Long introNo;

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

    public IntroCareer(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(String careerComName, String careerJob, String careerDate, String careerResult, String careerDetail) {
        this.careerComName = careerComName;
        this.careerJob = careerJob;
        this.careerDate = careerDate;
        this.careerResult = careerResult;
        this.careerDetail = careerDetail;
    }
}
