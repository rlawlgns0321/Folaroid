package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroArchivingRepository extends JpaRepository<IntroArchiving, Long> {
    List<IntroArchiving> findAllByIntroNo(Long introNo);
}
