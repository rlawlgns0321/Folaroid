package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroCertification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroCertificationRepository extends JpaRepository<IntroCertification, Long> {

    List<IntroCertification> findAllByIntroNo(Long introNo);
}
