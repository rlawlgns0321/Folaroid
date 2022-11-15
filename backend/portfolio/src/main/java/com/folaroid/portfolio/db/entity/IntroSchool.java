package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroSchool {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_school_no")
    private Long introSchoolNo;

    private Long introNo;

    @Column(name = "school_name", length = 50)
    private String schoolName;

    @Column(name = "school_major", length = 50)
    private String schoolMajor;

    @Column(name = "school_degree", length = 50)
    private String schoolDegree;

    @Column(name = "school_admission_date")
    private java.sql.Date schoolAdmissionDate;

    @Column(name = "school_graduation_date")
    private java.sql.Date schoolGraduationDate;

    @Column(name = "school_credit")
    private Float schoolCredit;

    @Column(name = "school_max_credit")
    private Float schoolMaxCredit;

    public IntroSchool(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(String schoolName, String schoolMajor, String schoolDegree, java.sql.Date schoolAdmissionDate, java.sql.Date schoolGraduationDate, Float schoolCredit, Float schoolMaxCredit) {
        this.schoolName = schoolName;
        this.schoolMajor = schoolMajor;
        this.schoolDegree = schoolDegree;
        this.schoolAdmissionDate = schoolAdmissionDate;
        this.schoolGraduationDate = schoolGraduationDate;
        this.schoolCredit = schoolCredit;
        this.schoolMaxCredit = schoolMaxCredit;
    }
}
