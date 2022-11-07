package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroSloganDto;
import com.folaroid.portfolio.api.service.IntroSloganService;
import com.folaroid.portfolio.db.entity.IntroSlogan;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "자기소개 슬로건", tags={"IntroSlogan"})
@RequestMapping("/intro-slogan")
@RequiredArgsConstructor
@RestController
public class IntroSloganController {
    private final IntroSloganService introSloganService;

    /**
     * 마이페이지 - 슬로건 등록
     */
    @PostMapping
    @ApiOperation(value = "마이페이지 - 슬로건 등록", notes = "마이페이지 - 슬로건을 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveIntroSlogan(@RequestBody IntroSloganDto.introSloganRequest introSloganRequest){
        Long introSloganNo = introSloganService.saveIntroSlogan(introSloganRequest);
        return new ResponseEntity<>(introSloganNo, HttpStatus.OK);
    }

    /**
     * 마이페이지 - 슬로건 삭제
     */
    @DeleteMapping("{introSloganNo}")
    @ApiOperation(value = "마이페이지 - 슬로건 삭제", notes = "마이페이지 - 슬로건을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })

    public ResponseEntity<?> deleteIntroSlogan(@PathVariable Long introSloganNo){
        introSloganService.deleteIntroSlogan(introSloganNo);
        return ResponseEntity.status(200).body(introSloganNo);
    }

    /**
     * 마이페이지 - 슬로건 조회
     */
    @GetMapping("{introNo}")
    @ApiOperation(value = "마이페이지 - 슬로건 조회", notes = "마이페이지 - 슬로건을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<IntroSlogan> findIntroSlogan(@PathVariable("introNo") Long introNo){
        IntroSlogan introSlogan = introSloganService.findIntroSlogan(introNo);
        return new ResponseEntity<>(introSlogan, HttpStatus.OK);
    }
}
