package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroPersonalData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IntroPersonalDataRepository extends JpaRepository<IntroPersonalData, Long> {
    IntroPersonalData findByIntroNo(Long introNo);
}
