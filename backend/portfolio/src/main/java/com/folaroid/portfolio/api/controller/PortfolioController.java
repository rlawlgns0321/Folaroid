package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.api.service.PortfolioService;
import com.folaroid.portfolio.db.entity.Portfolio;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/portfolio")
@RequiredArgsConstructor
@RestController
public class PortfolioController {
    @Autowired
    private final PortfolioService portfolioService;

    /**
     * 포트폴리오 제작
     */
    @PostMapping
    @ApiOperation(value = "포트폴리오 제작", notes = "포트폴리오 제작한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity createPortfolio(@RequestBody PortfolioDto.Request portfolioDtoRequest){
        Portfolio port = portfolioService.createPortfolio(portfolioDtoRequest);
    return  ResponseEntity.status(HttpStatus.OK).body(port);
    }

    @DeleteMapping("{pfNo}")
    @ApiOperation(value = "포트폴리오 삭제", notes = "포트폴리오를 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deletePortfolio(@PathVariable Long pfNo){
        portfolioService.deletePortfolio(pfNo);
        return ResponseEntity.status(200).body(pfNo);
    }
}
