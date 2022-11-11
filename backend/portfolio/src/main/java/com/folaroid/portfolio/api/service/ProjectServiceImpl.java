package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.db.entity.PjtImage;
import com.folaroid.portfolio.db.entity.Project;
import com.folaroid.portfolio.db.repository.PjtImageRepository;
import com.folaroid.portfolio.db.repository.PortfolioRepository;
import com.folaroid.portfolio.db.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    PortfolioRepository portfolioRepository;
    @Autowired
    PjtImageRepository pjtImageRepository;

    @Autowired
    FileService fileService;

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
        //프로젝트 이미지 삭제 코드 작성
        List<PjtImage> pjtImages = pjtImageRepository.findAllByPjtNo(project.getPjtNo());
        for (PjtImage pjtImage : pjtImages) {
            fileService.deleteFile(pjtImage.getPjtImageLocation());
        }
        projectRepository.delete(project);
    }

    @Transactional
    @Override
    public List<Project> findALlProject(Long pfNo) {
        return projectRepository.findAllByPortfolio(portfolioRepository.findById(pfNo).get());
    }

    @Transactional
    @Override
    public ProjectDto.projectResponse findProject(Long pjtNo) {
        Project project = projectRepository.findById(pjtNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 프로젝트가 존재하지 않습니다."));
        return new ProjectDto.projectResponse(project);
    }

    @Transactional
    @Override
    public void patchProject(Long pjtNo, ProjectDto.projectRequest projectRequest) {
        Project project = projectRepository.findById(pjtNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 프로젝트가 존재하지 않습니다."));
        project.updateProject(projectRequest.getPjtTitle(),
                projectRequest.getPjtSubtitle(),
                projectRequest.getPjtUrl(),
                projectRequest.getPjtGithubUrl(),
                projectRequest.getPjtStar(),
                projectRequest.getPjtOneImageLocation(),
                projectRequest.getPjtJson());
    }

    @Transactional
    @Override
    public ProjectDto.ProjectOneImageDto findProjectOneImageLocation(Long pjtNo) {
        Project project = projectRepository.findById(pjtNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 프로젝트가 존재하지 않습니다."));
        return new ProjectDto.ProjectOneImageDto(pjtNo, project.getPjtOneImageLocation());
    }

}
