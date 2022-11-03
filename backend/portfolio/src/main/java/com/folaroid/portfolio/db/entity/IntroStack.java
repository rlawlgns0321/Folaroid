package com.folaroid.portfolio.db.entity;

import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;
@Entity
@Getter
public class IntroStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_stack_no")
    private Long introStackNo;

//    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "intro_no")
    private Long introNo;

    private Long hashNo;


    public void saveIntroStack(Long introNo, Long hashNo) {
        this.introNo = introNo;
        this.hashNo = hashNo;
    }
}
