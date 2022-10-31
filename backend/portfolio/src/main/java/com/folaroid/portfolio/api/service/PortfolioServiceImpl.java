package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.db.entity.Portfolio;
import com.folaroid.portfolio.db.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("portfolioService")
public class PortfolioServiceImpl implements PortfolioService{

    @Autowired
    PortfolioRepository portfolioRepository;

    @Override
    public Portfolio createPortfolio(PortfolioDto.Request portfolioRequest) {
        return portfolioRepository.save(portfolioRequest.toEntity());
    }
}