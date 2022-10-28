package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Entity
@Getter
public class Portfolio {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pf_no")
    private Long pfNo;

    @Column(name = "user_no")
    private Long userNo;

    @Column(name = "pf_privacy")
    private Integer pfPrivacy;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "portfolio_templates_no")
    private PortfolioTemplates portfolioTemplates;

//    @Column(name = "portfolio_templates_no")
//    private Long portfolioTemplatesNo;

}
