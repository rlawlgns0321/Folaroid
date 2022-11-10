package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

import java.sql.Date;

import static javax.persistence.FetchType.LAZY;
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

    private String languageDate;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "intro_no")
    private Intro intro;
}
