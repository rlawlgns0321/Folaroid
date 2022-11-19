package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Portfolio;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

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
        private String pfName;

        public Portfolio toEntity(){
            Portfolio portfolio = Portfolio.builder()
                    .pfNo(pfNo)
                    .userNo(userNo)
                    .pfPrivacy(pfPrivacy)
                    .updatedAt(updatedAt)
                    .portfolioTemplatesNo(portfolioTemplatesNo)
                    .pfName(pfName)
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
//        private String pfImageLocation;

        public Response(Portfolio portfolio){
            this.pfNo = portfolio.getPfNo();
            this.userNo = portfolio.getUserNo();
            this.pfPrivacy = portfolio.getPfPrivacy();
            this.updatedAt = portfolio.getUpdatedAt();
            this.portfolioTemplatesNo = portfolio.getPortfolioTemplatesNo();
        }
    }
    @Getter
    @AllArgsConstructor
    public static class PortfolioSimpleDto {
        private Long pfNo;
        private LocalDateTime updated_at;
        private String pfName;

        public PortfolioSimpleDto(Portfolio portfolio) {
            this.pfNo = portfolio.getPfNo();
            this.updated_at = portfolio.getUpdatedAt();
            this.pfName = portfolio.getPfName();
        }
    }

    @Getter
    @AllArgsConstructor
    public static class PortfolioDetailDto {
        private Long pfNo;
        private Long portfolioTemplatesNo;
        private String pfName;
        private Long userNo;

        private Long introNo;

        public PortfolioDetailDto(Portfolio portfolio, Long introNo) {
            this.pfNo = portfolio.getPfNo();
            this.portfolioTemplatesNo = portfolio.getPortfolioTemplatesNo();
            this.pfName = portfolio.getPfName();
            this.userNo = portfolio.getUserNo();
            this.introNo = introNo;
        }
    }



    @Getter
    @AllArgsConstructor
    public static class SavePortfolioDto {
        private Long pfNo;
        private Long introNo;
        private String pfName;
        private Long portfolioTemplatesNo;
        private Long userNo;

        public SavePortfolioDto(Portfolio portfolio, Long introNo) {
            this.pfNo = portfolio.getPfNo();
            this.introNo = introNo;
            this.pfName = portfolio.getPfName();
            this.portfolioTemplatesNo = portfolio.getPortfolioTemplatesNo();
            this.userNo = portfolio.getUserNo();
        }
    }
    @Getter
    @AllArgsConstructor
    public static class DuplicatePortfolioDto {
        private Long pfNo;

    }


    @Getter
    @AllArgsConstructor
    public static class TotalPortfolioDto {
        private LocalDateTime updatedAt;
        private Long portfolioTemplatesNo;
        private String pfName;
        private List<ProjectDto.AllProjectDto> projects;
//        private IntroDto.AllIntroDto intro;

        public TotalPortfolioDto(Portfolio portfolio, List<ProjectDto.AllProjectDto> projects) { //, IntroDto.AllIntroDto intro
            this.updatedAt = portfolio.getUpdatedAt();
            this.portfolioTemplatesNo = portfolio.getPortfolioTemplatesNo();
            this.pfName = portfolio.getPfName();
            this.projects = projects;
//            this.intro = introDto;
        }
    }

}
