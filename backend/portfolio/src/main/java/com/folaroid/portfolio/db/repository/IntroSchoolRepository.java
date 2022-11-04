package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroSchool;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroSchoolRepository extends JpaRepository<IntroSchool, Long> {
    List<IntroSchool> findAllByIntro(Intro intro);
}
