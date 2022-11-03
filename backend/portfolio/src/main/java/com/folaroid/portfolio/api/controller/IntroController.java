package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroDto;
import com.folaroid.portfolio.api.dto.IntroPersonalDataDto;
import com.folaroid.portfolio.api.service.IntroPersonalDataService;
import com.folaroid.portfolio.api.service.IntroService;
import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroPersonalData;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/intro")
@RequiredArgsConstructor
@RestController
public class IntroController {
    @Autowired
    private final IntroPersonalDataService introPersonalDataService;
    private final IntroService introService;

    /**
     * 자기소개 작성
     */
    @PostMapping
    @ApiOperation(value = "자기소개 작성", notes = "자기소개를 작성한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity createIntro(@RequestBody IntroDto.introRequest introRequest){
        Intro intro = introService.createIntro(introRequest);
        return ResponseEntity.status(HttpStatus.OK).body(intro);
    }

    /**
     * 자기소개 개인정보 작성
     */
    @PostMapping("personal-data")
    @ApiOperation(value = "자기소개 개인정보 작성", notes = "자기소개의 개인정보를 작성한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity createPersonalData(@RequestBody IntroPersonalDataDto.Request introPersonalDataRequest){
        IntroPersonalData introPersonalData = introPersonalDataService.createIntroPersonalData(introPersonalDataRequest);
        return ResponseEntity.status(HttpStatus.OK).body(introPersonalData);
    }

    /**
     * 자기소개 개인정보 이름 삭제
     */
    @DeleteMapping("personal-data/{introPersonalDataNo}")
    @ApiOperation(value = "자기소개 개인정보 이름 삭제", notes = "자기소개 개인정보 이름을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity deletePersonalData(@PathVariable Long introPersonalDataNo){
        return null;
    }


    /**
     * 자기소개 이미지 등록
     */
    @PutMapping("")
    @ApiOperation(value = "자기소개 개인정보 이름 삭제", notes = "자기소개 개인정보 이름을 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity introImage(){
        return null;
    }

}
