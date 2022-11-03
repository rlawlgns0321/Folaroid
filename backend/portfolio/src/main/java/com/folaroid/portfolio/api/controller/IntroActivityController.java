package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroActivityDto;
import com.folaroid.portfolio.api.service.IntroActivityService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "자기소개 활동내역", tags={"IntroActivity"})
@RequestMapping("/intro-activity")
@RequiredArgsConstructor
@RestController
public class IntroActivityController {
    private final IntroActivityService introActivityService;

    /**
     * 마이페이지 - 활동내역 등록
     */
    @PostMapping
    @ApiOperation(value = "마이페이지 - 활동내역 등록", notes = "마이페이지 - 활동내역을 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveIntroActivity(@RequestBody IntroActivityDto.introActivityRequest introActivityRequest) {
        Long introActivityNo = introActivityService.saveIntroActivity(introActivityRequest);
        return new ResponseEntity<>(introActivityNo, HttpStatus.OK);
    }

    /**
     * 마이페이지 - 활동내역 삭제
     */
    @DeleteMapping("{introActivityNo}")
    @ApiOperation(value = "마이페이지 - 활동내역 삭제", notes = "마이페이지 - 활동내역을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteIntroActivity(@PathVariable Long introActivityNo){
        introActivityService.deleteIntroActivity(introActivityNo);
        return ResponseEntity.status(200).body(introActivityNo);
    }

}