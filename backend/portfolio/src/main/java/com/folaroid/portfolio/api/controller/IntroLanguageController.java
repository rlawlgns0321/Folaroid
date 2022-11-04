package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroDto;
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

import java.util.List;

@Api(value = "IntroLanguageAPI", tags={"IntroLanguage"})
@RestController
@RequiredArgsConstructor
public class IntroLanguageController {


    private final IntroLanguageService introLanguageService;

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="등록",
            httpMethod = "POST")
    @PostMapping("/intro_language")
    public ResponseEntity<Long> save(@RequestBody IntroLanguageDto.IntroLanguageDetail request){
        System.out.println(request.getLanguageDate());
        Long introLanguageNo = introLanguageService.save(request);
        return new ResponseEntity<>(introLanguageNo, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="조회",
            httpMethod = "GET")
    @GetMapping("/intro_language/{intro_no}")
    public ResponseEntity<List<IntroLanguage>> find(@PathVariable("intro_no") Long introNo){
        List<IntroLanguage> introLanguage = introLanguageService.find(introNo);
        return new ResponseEntity<>(introLanguage, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 공인 어학성적",
            notes="삭제",
            httpMethod = "DELETE")
    @DeleteMapping("/intro_language/{intro_language_no}")
    public ResponseEntity<Long> delete(@PathVariable("intro_language_no") Long introLanguageNo){
        introLanguageService.delete(introLanguageNo);
        return new ResponseEntity<>(introLanguageNo, HttpStatus.OK);
    }
}
