package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.db.entity.PjtImage;
import com.folaroid.portfolio.db.entity.Project;
import com.folaroid.portfolio.db.repository.PjtImageRepository;
import com.folaroid.portfolio.db.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PjtImageServiceImpl implements PjtImageService{
    @Autowired
    PjtImageRepository pjtImageRepository;
    @Autowired
    ProjectRepository projectRepository;

    @Transactional
    @Override
    public List<PjtImage> findPjtImage(Long pjtNo) {
        return pjtImageRepository.findAllByProject(projectRepository.findById(pjtNo).get());
    }
}
