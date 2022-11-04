package com.folaroid.portfolio.api.service;

import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.api.dto.IntroStackDto;
import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.api.dto.UserDto;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroStack;
import com.folaroid.portfolio.db.entity.Portfolio;
import com.folaroid.portfolio.db.repository.IntroRepository;
import com.folaroid.portfolio.db.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service("portfolioService")
public class PortfolioServiceImpl implements PortfolioService{

    @Autowired
    PortfolioRepository portfolioRepository;
    @Autowired
    IntroRepository introRepository;

    @Transactional
    @Override
    public PortfolioDto.SavePortfolioDto createPortfolio(PortfolioDto.portfolioRequest request) {
        Portfolio portfolio = portfolioRepository.save(request.toEntity());
        Intro intro = new Intro();
        intro.SavePortfolioInfo(portfolio.getPfNo(), portfolio.getUserNo());
        Long introNo = introRepository.save(intro).getIntroNo();
//        기존의 개인정보 데이터들을 바로 포트폴리오의 자기소개 정보로 저장할 것.

        return new PortfolioDto.SavePortfolioDto(portfolio, introNo);
    }

    @Transactional
    @Override
    public void deletePortfolio(Long pfNo) {
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(()->
                new IllegalArgumentException("해당 포트폴리오가 존재하지 않습니다."));
        // 포트폴리오에 존재하는 프로젝트 먼저 삭제하는 코드 작성
        // ??
        portfolioRepository.delete(portfolio);
    }

    @Transactional
    @Override
    public void patchPortfolioTemplate(Long pfNo, PortfolioDto.portfolioRequest portfolioRequest) {
        Portfolio portfolio = portfolioRepository.findById(pfNo).orElseThrow(()->
                new IllegalArgumentException("해당하는 포트폴리오 프로젝트가 존재하지 않습니다."));
        portfolio.updatePortfolioTemplate(portfolioRequest.getPortfolioTemplatesNo());
    }

    @Override
    @Transactional
    public List<PortfolioDto.PortfolioSimpleDto> readSimplePortfolio(UserDto.UserNoReq request) {
        List<Portfolio> portfolios = portfolioRepository.findAllByUserNo(request.getUserNo());
        List<PortfolioDto.PortfolioSimpleDto> result = portfolios.stream()
                .map(i -> new PortfolioDto.PortfolioSimpleDto(i))
                .collect(Collectors.toList());
        return result;
    }
}