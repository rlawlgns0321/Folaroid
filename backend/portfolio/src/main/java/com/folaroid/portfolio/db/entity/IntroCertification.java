package com.folaroid.portfolio.db.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroCertification {

    @Id @GeneratedValue
    @Column(name = "intro_certification_no")
    private Long introCertificationNo;

//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "intro_no")
    private Long introNo;

    @Column(name = "certification_date")
    private java.sql.Date certificationDate;

    @Column(name = "certification_name", length = 50)
    private String certificationName;

    @Column(name = "certification_issuer", length = 50)
    private String certificationIssuer;

    @Column(name = "certification_Detail", columnDefinition = "TEXT")
    private String certificationDetail;

    @Column(name = "certification_id", length = 50)
    private String certificationId;

    public void saveOtherData(java.sql.Date certificationDate, String certificationName, String certificationIssuer, String certificationDetail, String certificationId) {
        this.certificationDate = certificationDate;
        this.certificationName = certificationName;
        this.certificationIssuer = certificationIssuer;
        this.certificationDetail = certificationDetail;
        this.certificationId = certificationId;
    }

    public IntroCertification(Long introNo) {
        this.introNo = introNo;
    }
}
