package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroSlogan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntroSloganRepository extends JpaRepository<IntroSlogan, Long> {
    IntroSlogan findByIntroNo(Long introNo);
}
