package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroStack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IntroStackRepository extends JpaRepository<IntroStack, Long> {
    List<IntroStack> findAllByIntroNo(Long introNo);
}
