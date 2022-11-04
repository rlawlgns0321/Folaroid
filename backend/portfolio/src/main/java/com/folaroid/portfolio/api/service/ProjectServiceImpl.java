package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.db.entity.Portfolio;
import com.folaroid.portfolio.db.entity.Project;
import com.folaroid.portfolio.db.repository.PortfolioRepository;
import com.folaroid.portfolio.db.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    PortfolioRepository portfolioRepository;

    @Transactional
    @Override
    public Long saveProject(ProjectDto.projectRequest projectRequest) {
        return projectRepository.save(projectRequest.toEntity(portfolioRepository.findById(projectRequest.getPfNo()).get())).getPjtNo();
    }

    @Transactional
    @Override
    public void deleteProject(Long pjtNo) {
        Project project = projectRepository.findById(pjtNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 프로젝트가 없습니다."));
        projectRepository.delete(project);
    }
}
