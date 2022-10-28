package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.Intro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroRepository extends JpaRepository<Intro, Long> {

}