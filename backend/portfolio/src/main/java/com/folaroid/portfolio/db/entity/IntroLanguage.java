package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
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

    @Column
    private java.sql.Date languageDate;

    private Long introNo;

    public IntroLanguage(Long introNo) {
        this.introNo = introNo;
    }

    public void saveOtherData(String languageName, String languageTestName, String languageGrade, java.sql.Date languageDate) {
        this.languageName = languageName;
        this.languageTestName = languageTestName;
        this.languageGrade = languageGrade;
        this.languageDate = languageDate;
    }
}
