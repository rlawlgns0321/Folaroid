package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.PortfolioDto;
import com.folaroid.portfolio.api.service.PortfolioService;
import com.folaroid.portfolio.api.service.ProjectService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "포트폴리오", tags={"portfolio"})
@RequestMapping("/portfolio")
@RequiredArgsConstructor
@RestController
public class PortfolioController {
    private final PortfolioService portfolioService;
    private final ProjectService projectService;


    @PostMapping("/duplication")
    @ApiOperation(value = "포트폴리오", notes = "복사")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<PortfolioDto.DuplicatePortfolioDto> duplicatePortfolio(@RequestBody PortfolioDto.DuplicatePortfolioDto request){
        PortfolioDto.DuplicatePortfolioDto duplicatePortfolioDto = portfolioService.duplicatePortfolio(request.getPfNo());
    return  ResponseEntity.status(HttpStatus.OK).body(duplicatePortfolioDto);
    }

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
    public ResponseEntity createPortfolio(@RequestBody PortfolioDto.portfolioRequest portfolioDtoRequest){
        PortfolioDto.SavePortfolioDto savePortfolioDto = portfolioService.createPortfolio(portfolioDtoRequest);
        return  ResponseEntity.status(HttpStatus.OK).body(savePortfolioDto);
    }


    @GetMapping("/intro/{pfNo}")
    @ApiOperation(value = "포트폴리오 자기소개 접근자", notes = "포트폴리오 자기소개의 intro_no를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity getPortfolioIntroNo(@PathVariable Long pfNo){
        Long introNo = portfolioService.getPortfolioIntroNo(pfNo);
        return  ResponseEntity.status(HttpStatus.OK).body(introNo);
    }

    @GetMapping("/{pfNo}")
    @ApiOperation(value = "포트폴리오", notes = "포트폴리오 상세 정보를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity getPortfolio(@PathVariable Long pfNo){
        PortfolioDto.PortfolioDetailDto portfolioDetail = portfolioService.getPortfolioDetail(pfNo);
        return  ResponseEntity.status(HttpStatus.OK).body(portfolioDetail);
    }


    /**
     * 포트폴리오 삭제
     */
    @DeleteMapping("/{pfNo}")
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

    /**
     * 마이페이지에서 포트폴리오 간단 조회
     */
    @GetMapping("/all/{user_no}")
    @ApiOperation(value = "마이페이지 - 포트폴리오", notes = " 간단 조회", httpMethod = "GET")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<PortfolioDto.PortfolioSimpleDto>> readSimplePortfolio(@PathVariable("user_no") Long userNo){
        List<PortfolioDto.PortfolioSimpleDto> result = portfolioService.readSimplePortfolio(userNo);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * 포트폴리오 템플릿 수정
     */
    @PatchMapping("/{pfNo}")
    @ApiOperation(value = "포트폴리오 수정", notes = "포트폴리오 정보를 수정한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> patchPortfolio(@PathVariable Long pfNo, @RequestBody PortfolioDto.portfolioRequest portfolioRequest){
        portfolioService.patchPortfolio(pfNo, portfolioRequest);
        return ResponseEntity.status(200).body(pfNo);
    }

}
