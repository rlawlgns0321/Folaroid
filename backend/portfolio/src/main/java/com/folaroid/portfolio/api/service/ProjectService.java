package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.db.entity.Project;

import java.util.List;

public interface ProjectService {
    Long saveProject(ProjectDto.projectRequest projectRequest);

    void deleteProject(Long pjtNo);

    List<Project> findALlProject(Long pfNo);
}
