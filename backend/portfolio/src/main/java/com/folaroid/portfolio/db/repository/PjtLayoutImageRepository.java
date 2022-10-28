package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.PjtLayoutImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PjtLayoutImageRepository extends JpaRepository<PjtLayoutImage, Long> {

}
