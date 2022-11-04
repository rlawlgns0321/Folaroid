package com.folaroid.portfolio.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
public class IntroAwards {

    @Id @GeneratedValue
    @Column(name = "intro_awards_no")
    private Long introAwardsNo;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "intro_no")
    private Intro intro;

    @Column(name = "awards_name", length = 50)
    private String awardsName;

    @Column(name = "awards_date")
    private String awardsDate;

    @Column(name = "awards_issuer", length = 50)
    private String awardsIssuer;

    @Column(name = "awards_detail", columnDefinition = "TEXT")
    private String awardsDetail;
}
