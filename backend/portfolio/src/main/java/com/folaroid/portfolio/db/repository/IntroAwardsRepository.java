package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.IntroAwards;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroAwardsRepository extends JpaRepository<IntroAwards, Long> {
    List<IntroAwards> findAllByIntroNo(Long introNo);
}