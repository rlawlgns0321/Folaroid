package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;

public interface ProjectService {
    Long saveProject(ProjectDto.projectRequest projectRequest);

    void deleteProject(Long pjtNo);
}
