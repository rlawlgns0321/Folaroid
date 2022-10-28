package com.folaroid.portfolio.db.repository;


import com.folaroid.portfolio.db.entity.IntroArchiving;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroArchivingRepository extends JpaRepository<IntroArchiving, Long> {

}
