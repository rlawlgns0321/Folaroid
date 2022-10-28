package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroCertification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroCertificationRepository extends JpaRepository<IntroCertification, Long> {

}
