package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class PjtLayoutImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_no")
    private Long imageNo;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "pjt_detail_no")
    private PjtLayout pjtLayout;

//    @Column(name = "pjt_detail_no")
//    private Long pjtDetailNo;

    @Column(name = "pjt_detail_image_location", length = 2083)
    private String pjtDetailImageLocation;
}
