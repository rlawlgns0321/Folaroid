package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class IntroImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_image_no")
    private long introImageNo;

    @Column(length = 2083)
    private String introImageLocation;

//    @OneToOne(mappedBy = "introImage", fetch = LAZY)
    private Long introNo;

    public IntroImage(Long introNo, String introImageLocation){
        this.introNo = introNo;
        this.introImageLocation = introImageLocation;
    }

    public void IntroImageLocationSave(String introImageLocation) {
        this.introImageLocation = introImageLocation;
    }
}
