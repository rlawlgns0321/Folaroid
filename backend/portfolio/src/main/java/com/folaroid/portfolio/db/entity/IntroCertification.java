package com.folaroid.portfolio.db.entity;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
public class IntroCertification {

    @Id @GeneratedValue
    //@Column(name = "intro_certification_id")
    private Long introCertificationId;

    private Long introNo;
    private LocalDateTime certificationDate;
    private String certificationName;
    private String certificationIssuer;

    @Lob
    //@Column(name="certification_detail", length=512)
    private String certificationDetail;
    private String certificationId;
}
