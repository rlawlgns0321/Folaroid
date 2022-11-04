package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroActivity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroActivityRepository extends JpaRepository<IntroActivity, Long> {
    List<IntroActivity> findAllByIntro(Intro intro);
}