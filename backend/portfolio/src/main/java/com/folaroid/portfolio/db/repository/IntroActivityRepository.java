package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.IntroActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroActivityRepository extends JpaRepository<IntroActivity, Long> {

}