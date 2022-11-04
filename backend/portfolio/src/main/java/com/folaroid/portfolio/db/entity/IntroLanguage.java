package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

import java.sql.Date;

import static javax.persistence.FetchType.LAZY;
@Entity
@Getter
public class IntroLanguage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "intro_language_no")
    private Long introLanguageNo;

    @Column(length = 50)
    private String languageName;

    @Column(length = 50)
    private String languageTestName;

    @Column(length = 10)
    private String languageGrade;

    private java.sql.Date languageDate;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    public void saveIntroLanguage(Intro intro, String languageName, String languageTestName, String languageGrade, java.sql.Date languageDate) {
        this.intro = intro;
        this.languageName = languageName;
        this.languageTestName = languageTestName;
        this.languageGrade = languageGrade;
        this.languageDate = languageDate;
    }
}
