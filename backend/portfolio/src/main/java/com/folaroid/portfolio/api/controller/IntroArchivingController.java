package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.api.service.IntroArchivingService;
import com.folaroid.portfolio.db.entity.IntroArchiving;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/mypage/intro-archiving")
@RequiredArgsConstructor
@RestController
public class IntroArchivingController {
    private final IntroArchivingService introArchivingService;

    /**
     * 마이페이지 - 링크 등록
     */

    @PostMapping
    @ApiOperation(value = "마이페이지 - 링크 등록", notes = "마이페이지 - 링크를 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveIntroArchiving(@RequestBody IntroArchivingDto.introArchivingRequest introArchivingRequest){
        Long introArchivingNo = introArchivingService.saveIntroArchiving(introArchivingRequest);
        return new ResponseEntity<>(introArchivingNo, HttpStatus.OK);
    }

    /**
     * 마이페이지 - 링크 삭제
     */

    @DeleteMapping("{introArchivingNo}")
    @ApiOperation(value = "마이페이지 - 링크 삭제", notes = "마이페이지 - 링크를 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteIntroArchiving(@PathVariable Long introArchivingNo){
        introArchivingService.deleteIntroArchiving(introArchivingNo);
        return ResponseEntity.status(200).body(introArchivingNo);
    }

    /**
     * 마이페이지 - 링크 조회
     */
    @GetMapping("{introNo}")
    @ApiOperation(value = "마이페이지 - 링크 조회", notes = "마이페이지 - 링크를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public List<IntroArchivingDto.introArchivingResponse> readAllIntroArchiving(Long introNo){
        return introArchivingService.readAllIntroArchiving(introNo);
    }

}
