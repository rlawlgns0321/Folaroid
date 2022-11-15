package com.folaroid.portfolio.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Portfolio {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pf_no")
    private Long pfNo;

    @Column(name = "user_no")
    private Long userNo;

    @Column(name = "pf_privacy")
    private Integer pfPrivacy;

    @LastModifiedDate
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "portfolio_templates_no")
    private Long portfolioTemplatesNo;

    private String pfName;

    public void updatePortfolioTemplate(Long portfolioTemplatesNo){
        this.portfolioTemplatesNo = portfolioTemplatesNo;
    }
    public Portfolio(Portfolio portfolio) {
        this.userNo = portfolio.userNo;
        this.pfPrivacy = portfolio.pfPrivacy;
        this.updatedAt = portfolio.updatedAt;
        this.portfolioTemplatesNo = portfolio.portfolioTemplatesNo;
        this.pfName = portfolio.pfName;
    }

    public void updatePortfolioName(String pfName) {
        this.pfName = pfName;
    }
}
