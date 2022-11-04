package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;

public interface ProjectService {
    Long saveProject(ProjectDto.projectRequest projectRequest);
    void patchProjectTitle(Long pjNo,Long pjtNo, ProjectDto.projectRequest projectRequest);
}
