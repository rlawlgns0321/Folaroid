package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroAwardsDto;
import com.folaroid.portfolio.api.service.IntroAwardsService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "자기소개 수상내역", tags={"IntroAwards"})
@RequestMapping("/intro-awards")
@RequiredArgsConstructor
@RestController
public class IntroAwardsController {
    private final IntroAwardsService introAwardsService;

    /**
     * 마이페이지 - 수상내역 등록
     */
    @PostMapping
    @ApiOperation(value = "마이페이지 - 수상 등록", notes = "마이페이지 - 수상을 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveIntroAwards(@RequestBody IntroAwardsDto.introAwardsRequest introAwardsRequest){
        Long introAwardsNo = introAwardsService.saveIntroAwards(introAwardsRequest);
        return new ResponseEntity<>(introAwardsNo, HttpStatus.OK);
    }

    /**
     * 마이페이지 - 수상내역 삭제
     */
    @DeleteMapping("{introAwardsNo}")
    @ApiOperation(value = "마이페이지 - 수상 삭제", notes = "마이페이지 - 수상 내역을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteIntroAwards(@PathVariable Long introAwardsNo){
        introAwardsService.deleteIntroAwards(introAwardsNo);
        return ResponseEntity.status(200).body(introAwardsNo);
    }

}
