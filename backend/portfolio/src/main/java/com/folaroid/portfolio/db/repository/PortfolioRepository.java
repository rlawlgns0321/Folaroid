package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {

}
