package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;

public interface ProjectService {
    void patchProjectTitle(Long pjNo,Long pjtNo, ProjectDto.projectRequest projectRequest);
}
