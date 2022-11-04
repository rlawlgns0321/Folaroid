package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroCertificationDto;
import com.folaroid.portfolio.api.service.IntroCertificationService;
import com.folaroid.portfolio.db.entity.IntroCertification;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "자기소개 자격증", tags={"IntroCertification"})
@RequestMapping("/intro-certification")
@RequiredArgsConstructor
@RestController
public class IntroCertificationController {
    private final IntroCertificationService introCertificationService;

    /**
     * 자기소개 - 자격증 등록
     */
    @PostMapping
    @ApiOperation(value = "마이페이지 - 자격증 등록", notes = "마이페이지 - 자격증을 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveIntroCertification(@RequestBody IntroCertificationDto.introCertificationRequest introCertificationRequest){
        Long introIntroCertificationNo = introCertificationService.saveIntroCertification(introCertificationRequest);
        return new ResponseEntity<>(introIntroCertificationNo, HttpStatus.OK);
    }

    /**
     * 자기소개 - 자격증 삭제
     */
    @DeleteMapping("{introCertificationNo}")
    @ApiOperation(value = "마이페이지 - 자격증 삭제", notes = "마이페이지 - 자격증을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteIntroCertification(@PathVariable Long introCertificationNo){
        introCertificationService.deleteIntroCertification(introCertificationNo);
        return ResponseEntity.status(200).body(introCertificationNo);
    }

    /**
     * 자기소개 - 자격증 조회
     */
    @GetMapping("{introNo}")
    @ApiOperation(value = "마이페이지 - 자격증 조회", notes = "마이페이지 - 자격증을 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<IntroCertification>> findIntroCertification(@PathVariable("introNo")Long introNo){
        List<IntroCertification> introCertifications = introCertificationService.findIntroCertification(introNo);
        return new ResponseEntity<>(introCertifications, HttpStatus.OK);
    }

}
