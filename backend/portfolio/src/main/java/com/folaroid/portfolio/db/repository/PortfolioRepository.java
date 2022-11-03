package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    List<Portfolio> findAllByUserNo(Long userNo);
}
