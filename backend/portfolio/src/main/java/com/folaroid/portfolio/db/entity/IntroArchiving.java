package com.folaroid.portfolio.db.entity;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class IntroArchiving {

    @Id @GeneratedValue
    //@Column(name = "intro_archiving_no")
    private Long introArchivingNo;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    private String archivingName; // 사용자 관련 링크 이름
    private String archivingLink; // 사용자 관련 링크

    @Builder
    public IntroArchiving(String archivingName, String archivingLink, Intro intro){
        this.archivingName = archivingName;
        this.archivingLink = archivingLink;
        this.intro = intro;
    }

}
