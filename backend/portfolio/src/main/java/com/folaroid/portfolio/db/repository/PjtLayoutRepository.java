package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.PjtLayout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PjtLayoutRepository extends JpaRepository<PjtLayout, Long> {

}
