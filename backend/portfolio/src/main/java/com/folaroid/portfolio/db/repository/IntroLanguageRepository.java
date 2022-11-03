package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroLanguage;
import com.folaroid.portfolio.db.entity.IntroStack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroLanguageRepository extends JpaRepository<IntroLanguage, Long> {
    List<IntroLanguage> findAllByIntroNo(Long introNo);
}
