package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.PortfolioTemplates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PortfolioTemplatesRepository extends JpaRepository<PortfolioTemplates, Long> {

}