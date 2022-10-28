package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroCareer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroCareerRepository extends JpaRepository<IntroCareer, Long> {

}
