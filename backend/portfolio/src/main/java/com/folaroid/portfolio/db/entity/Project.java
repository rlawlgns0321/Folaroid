package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pjt_no")
    private Long pjtNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "pf_no")
    private Portfolio portfolio;

    @Column(name = "pjt_title", length = 100)
    private String pjtTitle;

    @Column(name = "pjt_subtitle", length = 100)
    private String pjtSubtitle;

    @Column(name = "pjt_url", length = 2083)
    private String pjtUrl;

    @Column(name = "pjt_github_url", length = 2083)
    private String pjtGithubUrl;

    @Column(name = "pjt_star")
    private Integer pjtStar;

    @Column(name = "pjt_image_location", length = 2083)
    private String pjtImageLocation;
}
