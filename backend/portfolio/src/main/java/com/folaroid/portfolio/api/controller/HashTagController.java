package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.db.entity.HashTag;
import com.folaroid.portfolio.db.repository.HashTagRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "해시태그", tags={"HashTag"})
@RequestMapping("/hash-tag")
@RequiredArgsConstructor
@RestController
public class HashTagController {

    private final HashTagRepository hashTagRepository;

    @ApiOperation(value = "전체 해시태그",
            notes="조회",
            httpMethod = "GET")
    @GetMapping
    public ResponseEntity<List<HashTag>> findAll(){
        List<HashTag> hashTag = hashTagRepository.findAll();
        return new ResponseEntity<>(hashTag, HttpStatus.OK);
    }
}
