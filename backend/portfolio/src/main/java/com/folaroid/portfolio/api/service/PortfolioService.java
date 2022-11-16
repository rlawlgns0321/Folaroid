package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.PortfolioDto;

import java.util.List;

public interface PortfolioService {
    PortfolioDto.SavePortfolioDto createPortfolio(PortfolioDto.portfolioRequest portfolioRequest);
    void deletePortfolio(Long pfNo);
    void patchPortfolio(Long pfNo, PortfolioDto.portfolioRequest portfolioRequest);

    List<PortfolioDto.PortfolioSimpleDto> readSimplePortfolio(Long userNo);

    Long getPortfolioIntroNo(Long pfNo);

    PortfolioDto.DuplicatePortfolioDto duplicatePortfolio(Long pfNo);

    PortfolioDto.PortfolioDetailDto getPortfolioDetail(Long pfNo);
}
