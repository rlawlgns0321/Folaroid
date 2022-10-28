package com.folaroid.portfolio.db.entity;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

public class IntroLanguage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long introLanguageNo;

    @Column(length = 50)
    private String language_name;

    @Column(length = 50)
    private String language_test_name;

    @Column(length = 10)
    private String language_grade;

    private java.sql.Date language_date;

    @OneToOne(mappedBy = "introLanguage", fetch = LAZY)
    private Intro intro;
}
