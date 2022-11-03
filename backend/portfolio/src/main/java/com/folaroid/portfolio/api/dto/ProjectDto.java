package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Portfolio;
import com.folaroid.portfolio.db.entity.Project;
import lombok.*;

public class ProjectDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class projectRequest{
        private Long pjtNo;
        private Portfolio portfolio;
//        private Long pfNo;
        private String pjtTitle;
        private String pjtSubTitle;
        private String pjtUrl;
        private String pjtGithubUrl;
        private Integer pjtStar;
        private String pjtImageLocation;

        public Project toEntity(){
            Project project = Project.builder()
                    .pjtNo(pjtNo)
//                    .pfNo(pfNo)
                    .portfolio(portfolio)
                    .pjtTitle(pjtTitle)
                    .pjtSubtitle(pjtSubTitle)
                    .pjtUrl(pjtUrl)
                    .pjtGithubUrl(pjtGithubUrl)
                    .pjtStar(pjtStar)
                    .pjtImageLocation(pjtImageLocation)
                    .build();
            return project;
        }

    }
    @Getter
    public static class Response{
        private Long pjtNo;
        private Long pfNo;
        private Portfolio portfolio;
        private String pjtTitle;
        private String pjtSubTitle;
        private String pjtUrl;
        private String pjtGithubUrl;
        private Integer pjtStar;
        private String pjtImageLocation;

        public Response(Project project){
            this.pjtNo = project.getPjtNo();
//            this.pfNo = project.getPfNo();
            this.portfolio = project.getPortfolio();
            this.pjtTitle = project.getPjtTitle();
            this.pjtSubTitle = project.getPjtSubtitle();
            this.pjtUrl = project.getPjtUrl();
            this.pjtGithubUrl = project.getPjtGithubUrl();
            this.pjtStar = project.getPjtStar();
            this.pjtImageLocation = project.getPjtImageLocation();
        }
    }
}
