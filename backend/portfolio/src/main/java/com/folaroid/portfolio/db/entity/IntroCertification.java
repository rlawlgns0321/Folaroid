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
public class IntroCertification {

    @Id @GeneratedValue
    @Column(name = "intro_certification_no")
    private Long introCertificationNo;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "certification_date")
    private String certificationDate;

    @Column(name = "certification_name", length = 50)
    private String certificationName;

    @Column(name = "certification_issuer", length = 50)
    private String certificationIssuer;

    @Column(name = "certification_Detail", columnDefinition = "TEXT")
    private String certificationDetail;

    @Column(name = "certification_id", length = 50)
    private String certificationId;
}
