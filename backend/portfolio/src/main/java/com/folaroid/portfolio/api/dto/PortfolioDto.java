package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Portfolio;
import lombok.*;
import java.time.LocalDateTime;

public class PortfolioDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class portfolioRequest{
        private Long pfNo;
        private Long userNo;
        private Integer pfPrivacy;
        private LocalDateTime updatedAt;
        private Long portfolioTemplatesNo;
        //private PortfolioTemplates portfolioTemplates;
        private String pfImageLocation;

        public Portfolio toEntity(){
            Portfolio portfolio = Portfolio.builder()
                    .pfNo(pfNo)
                    .userNo(userNo)
                    .pfPrivacy(pfPrivacy)
                    .updatedAt(updatedAt)
                    //.portfolioTemplates(portfolioTemplates)
                    .portfolioTemplatesNo(portfolioTemplatesNo)
                    .pfImageLocation(pfImageLocation)
                    .build();
            return portfolio;
        }
    }

    @Getter
    public static class Response{
        private Long pfNo;
        private Long userNo;
        private Integer pfPrivacy;
        private LocalDateTime updatedAt;
        //private PortfolioTemplates portfolioTemplates;
        private Long portfolioTemplatesNo;
        private String pfImageLocation;

        public Response(Portfolio portfolio){
            this.pfNo = portfolio.getPfNo();
            this.userNo = portfolio.getUserNo();
            this.pfPrivacy = portfolio.getPfPrivacy();
            this.updatedAt = portfolio.getUpdatedAt();
            //this.portfolioTemplates = portfolio.getPortfolioTemplates();
            this.portfolioTemplatesNo = portfolio.getPortfolioTemplatesNo();
            this.pfImageLocation = portfolio.getPfImageLocation();
        }
    }
    @Getter
    @AllArgsConstructor
    public static class PortfolioSimpleDto {
        private Long pfNo;
        private LocalDateTime updated_at;

        public PortfolioSimpleDto(Portfolio portfolio) {
            this.pfNo = portfolio.getPfNo();
            this.updated_at = portfolio.getUpdatedAt();
        }

    }

}
