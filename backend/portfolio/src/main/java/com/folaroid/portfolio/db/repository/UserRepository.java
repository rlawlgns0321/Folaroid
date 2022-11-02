package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUserGithubId(String userGithubId);

    @Query("SELECT i from Intro i where i.pfNo IS NULL and i.userNo = :userNo")
    Long findUserDefaultData(Long userNo);

}
