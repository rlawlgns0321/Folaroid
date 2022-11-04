package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroCareer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroCareerRepository extends JpaRepository<IntroCareer, Long> {
    List<IntroCareer> findAllByIntro(Intro intro);
}
