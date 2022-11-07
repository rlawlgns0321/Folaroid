package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.service.FileService;
import com.folaroid.portfolio.api.service.PjtImageService;
import com.folaroid.portfolio.db.entity.PjtImage;
import com.folaroid.portfolio.db.repository.PjtImageRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Api(value = "프로젝트 이미지", tags={"PjtImage"})
@RequestMapping("/project-image")
@RestController
@RequiredArgsConstructor
public class PjtImageController {
    private final PjtImageService pjtImageService;
    private final FileService fileService;

    /**
     * 프로젝트 - 이미지 조회
     */
    @GetMapping("{pjtNo}")
    @ApiOperation(value = "프로젝트 - 이미지 조회", notes = "프로젝트 - 이미지를 조회한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<PjtImage>> findPjtImage(@PathVariable("pjtNo") Long pjtNo ){
        List<PjtImage> pjtImages = pjtImageService.findPjtImage(pjtNo);
        return new ResponseEntity<>(pjtImages, HttpStatus.OK);
    }


    @PostMapping("/{pjt-no}")
    @ApiOperation(value = "포트폴리오 이미지 저장", notes = "포트폴리오 이미지를 저장한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<List<String>> uploadImg(@PathVariable("pjt-no") Long pjtNo, @RequestPart(value = "file", required = true) List<MultipartFile> multipartFile)  throws IOException {

        List<String> fileNameList = fileService.uploadImg(pjtNo, multipartFile);
        return new ResponseEntity<>(fileNameList, HttpStatus.OK);
    }
}
