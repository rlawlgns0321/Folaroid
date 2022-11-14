package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroImageDto;
import com.folaroid.portfolio.api.service.FileService;
import com.folaroid.portfolio.api.service.IntroImageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Api(value = "자기소개 이미지", tags={"IntroImage"})
@RequestMapping("/intro-image")
@RequiredArgsConstructor
@RestController
public class IntroImageController {

    private final FileService fileService;
    private final IntroImageService introImageService;

    @ApiOperation(value = "자기소개 이미지",
            notes="조회",
            httpMethod = "GET")
    @GetMapping("/{intro_no}")
    public ResponseEntity<IntroImageDto.IntroImageResponse> find(@PathVariable("intro_no") Long introNo){
        return new ResponseEntity<>(introImageService.findIntroImage(introNo), HttpStatus.OK);
    }


    @ApiOperation(value = "자기소개 이미지",
            notes="업데이트",
            httpMethod = "PUT")
    @PutMapping("/{intro_no}")
    public ResponseEntity<IntroImageDto.IntroImageResponse> update(@PathVariable("intro_no") Long introNo, @RequestParam("file") MultipartFile multipartFile)  throws IOException {
        String introImageLocation = fileService.introImageUploadImage(introNo, multipartFile);
        IntroImageDto.IntroImageResponse introImageResponse = new IntroImageDto.IntroImageResponse(introNo, introImageLocation);
        return new ResponseEntity<>(introImageResponse, HttpStatus.OK);
    }
}
