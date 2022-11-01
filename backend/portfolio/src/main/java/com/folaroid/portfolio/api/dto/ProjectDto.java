package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Portfolio;
import com.folaroid.portfolio.db.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

public class ProjectDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request{
        private Long pjtNo;
        private Portfolio portfolio;
        private String pjtTitle;
        private String pjtSubTitle;
        private String pjtUrl;
        private String pjtGithubUrl;
        private Integer pjtStar;
        private String pjtImageLocation;

        public Project toEntity(){
            Project project = Project.builder()
                    .pjtNo(pjtNo)
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
    public static class Response{
        private Long pjtNo;
        private Portfolio portfolio;
        private String pjtTitle;
        private String pjtSubTitle;
        private String pjtUrl;
        private String pjtGithubUrl;
        private Integer pjtStar;
        private String pjtImageLocation;

        public Response(Project project){
            this.pjtNo = project.getPjtNo();
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
