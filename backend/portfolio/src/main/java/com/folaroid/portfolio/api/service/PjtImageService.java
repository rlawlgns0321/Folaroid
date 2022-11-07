package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.db.entity.PjtImage;

import java.util.List;

public interface PjtImageService {
    public List<PjtImage> findPjtImage(Long pjtNo);
}
