package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.db.entity.Portfolio;

public interface PortfolioService {
    Portfolio createPortfolio(PortfolioDto.Request portfolioRequest);
    void deletePortfolio(Long pfNo);
}
