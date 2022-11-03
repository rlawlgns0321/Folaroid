package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.db.entity.Portfolio;

import java.util.List;

public interface PortfolioService {
    Portfolio createPortfolio(PortfolioDto.portfolioRequest portfolioRequest);
    void deletePortfolio(Long pfNo);
    void patchPortfolioTemplate(Long pfNo, PortfolioDto.portfolioRequest portfolioRequest);

    List<PortfolioDto.PortfolioSimpleDto> readSimplePortfolio(UserDto.UserNoReq request);
}
