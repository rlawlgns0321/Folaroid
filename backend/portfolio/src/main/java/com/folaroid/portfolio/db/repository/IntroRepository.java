package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IntroRepository extends JpaRepository<Intro, Long> {
    @Query("SELECT i.introNo from Intro i where i.pfNo IS NULL and i.userNo = :userNo")
    Long findUserDefaultData(Long userNo);
}