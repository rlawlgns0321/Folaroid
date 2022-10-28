package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroImageRepository extends JpaRepository<IntroImage, Long> {

}
