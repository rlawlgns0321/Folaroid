package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroArchivingDto;
import com.folaroid.portfolio.api.service.IntroArchivingService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity createIntroArchiving(@RequestBody IntroArchivingDto.Request introArchivingRequest){
        return ResponseEntity.ok(introArchivingService.createIntroArchiving(introArchivingRequest));
    }

}
