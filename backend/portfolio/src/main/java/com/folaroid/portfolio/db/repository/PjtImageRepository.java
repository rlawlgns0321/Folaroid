package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.PjtImage;
import com.folaroid.portfolio.db.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PjtImageRepository extends JpaRepository<PjtImage, Long> {
    List<PjtImage> findAllByPjtNo(Long pjtNo);
}
