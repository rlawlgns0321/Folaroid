package com.folaroid.portfolio.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class PortfolioTemplates {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "portfolio_templates_no")
    private Long portfolioTemplatesNo;

    @Column(name = "portfolio_templates_name", length = 50)
    private  String portfolioTemplatesName;
}
