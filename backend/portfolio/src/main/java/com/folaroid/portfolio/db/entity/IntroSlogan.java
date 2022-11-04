package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;

@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class IntroSlogan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long introSloganNo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "slogan_content", columnDefinition = "TEXT")
    private String sloganContent;
}
