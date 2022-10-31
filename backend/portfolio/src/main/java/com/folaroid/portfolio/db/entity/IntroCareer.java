package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class IntroCareer {

    @Id @GeneratedValue
    //@Column(name="intro_career_no")
    private Long introCareerNo;

    private Long introNo;

    private String careerComName;
    private String careerJob;
    private String careerDate;
    private String careerResult;

    @Lob
    //@Column(name="career_detail", length=512)
    private String careerDetail;
}
