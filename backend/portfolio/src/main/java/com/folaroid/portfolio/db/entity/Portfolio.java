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

//    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "pf_templates_no")
//    private PortfolioTemplates portfolioTemplates;

    @Column(name = "portfolio_templates_no")
    private Long portfolioTemplatesNo;

    @Column(name = "pf_image_location", length = 2083)
    private String pfImageLocation;

    public void updatePortfolioTemplate(Long portfolioTemplatesNo){
        this.portfolioTemplatesNo = portfolioTemplatesNo;
    }

}
