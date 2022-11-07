package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
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
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pjt_no")
    private Long pjtNo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pf_no")
    private Portfolio portfolio;
//    @Column(name = "pf_no")
//    private Long pfNo;

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

    @Column(name = "pjt_one_image_location", length = 2083)
    private String pjtOneImageLocation; // 프로젝트 대표이미지

    @Column(name = "pjt_json", columnDefinition = "TEXT")
    private String pjtJson;

    public void updateProjectTitle(String pjtTitle, String pjtSubtitle){
        this.pjtTitle = pjtTitle;
        this.pjtSubtitle = pjtSubtitle;
    }
}
