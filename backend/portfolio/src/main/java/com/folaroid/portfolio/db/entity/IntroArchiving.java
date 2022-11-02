package com.folaroid.portfolio.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Builder
public class IntroArchiving {

    @Id @GeneratedValue
    //@Column(name = "intro_archiving_no")
    private Long introArchivingNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    private String archivingName; // 사용자 관련 링크 이름
    private String archivingLink; // 사용자 관련 링크

}
