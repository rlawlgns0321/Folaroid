package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

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

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "school_name", length = 50)
    private String schoolName;

    @Column(name = "school_major", length = 50)
    private String schoolMajor;

    @Column(name = "school_degree", length = 50)
    private String schoolDegree;

    @Column(name = "school_admission_date")
    private String schoolAdmissionDate;

    @Column(name = "school_graduation_date")
    private String schoolGraduationDate;

    @Column(name = "school_credit")
    private Float schoolCredit;

    @Column(name = "school_max_credit")
    private Float schoolMaxCredit;
}
