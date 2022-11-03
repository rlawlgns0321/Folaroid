package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.db.entity.Project;
import com.folaroid.portfolio.db.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service("projectService")
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    ProjectRepository projectRepository;

    @Transactional
    @Override
    public void patchProjectTitle(Long pjNo,Long pjtNo, ProjectDto.projectRequest projectRequest) {
        Project project = projectRepository.findById(pjtNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 프로젝트가 존재하지 않습니다."));
        project.updateProjectTitle(projectRequest.getPjtTitle(), projectRequest.getPjtSubTitle());

    }
}
