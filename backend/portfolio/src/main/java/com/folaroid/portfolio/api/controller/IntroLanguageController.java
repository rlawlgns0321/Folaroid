package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroLanguageDto;
import com.folaroid.portfolio.api.dto.IntroStackDto;
import com.folaroid.portfolio.api.service.IntroLanguageService;
import com.folaroid.portfolio.db.entity.IntroLanguage;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "IntroLanguageAPI", tags={"IntroLanguage"})
@RestController
@RequiredArgsConstructor
public class IntroLanguageController {


    private final IntroLanguageService introLanguageService;

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="등록",
            httpMethod = "POST")
    @PostMapping("/mypage/intro_language")
    public ResponseEntity<Long> save(@RequestBody IntroLanguageDto.IntroLanguageDetail request){
        Long introLanguageNo = introLanguageService.save(request);
        return new ResponseEntity<>(introLanguageNo, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="조회",
            httpMethod = "GET")
    @GetMapping("/mypage/intro_language")
    public ResponseEntity<IntroLanguage> find(@RequestBody IntroLanguageDto.IntroLanguageNo request){
        IntroLanguage introLanguage = introLanguageService.find(request);
        return new ResponseEntity<>(introLanguage, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="삭제",
            httpMethod = "DELETE")
    @DeleteMapping("/mypage/intro_language")
    public ResponseEntity<Long> delete(@RequestBody IntroLanguageDto.IntroLanguageNo request){
        introLanguageService.delete(request.getIntroLanguageNo());
        return new ResponseEntity<>(request.getIntroLanguageNo(), HttpStatus.OK);
    }
}
