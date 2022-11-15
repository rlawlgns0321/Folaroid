package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class IntroStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_stack_no")
    private Long introStackNo;

//    @ManyToOne(fetch = LAZY)
//    @JoinColumn(name = "intro_no")
    private Long introNo;

    private Long hashNo;


    public IntroStack(Long introNo, Long hashNo) {
        this.introNo = introNo;
        this.hashNo = hashNo;
    }

    public IntroStack(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(Long hashNo) {
        this.hashNo = hashNo;
    }
}
