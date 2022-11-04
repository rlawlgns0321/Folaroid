package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroSlogan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroSloganRepository extends JpaRepository<IntroSlogan, Long> {
    List<IntroSlogan> findAllByIntro(Intro intro);
}
