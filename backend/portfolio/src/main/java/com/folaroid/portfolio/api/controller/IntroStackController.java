package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.service.IntroStackService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.folaroid.portfolio.api.dto.IntroStackDto.*;

@Api(value = "IntroStackAPI", tags={"IntroStack"})
@RestController
@RequiredArgsConstructor
public class IntroStackController {

    private final IntroStackService introStackService;

    @ApiOperation(value = "마이페이지 - 기술스택",
            notes="등록",
            httpMethod = "POST")
    @PostMapping("/mypage/intro_stack")
    public ResponseEntity<Long> save(@RequestBody StackNoDto request){
        Long introStackNo = introStackService.save(request);
        return new ResponseEntity<>(introStackNo, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 기술스택",
            notes="조회",
            httpMethod = "GET")
    @GetMapping("/mypage/intro_stack")
    public ResponseEntity<StackNameDto> find(@RequestBody IntroStackNoDto request){
        StackNameDto introStackDto = introStackService.find(request);
        return new ResponseEntity<>(introStackDto, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 기술스택",
            notes="삭제",
            httpMethod = "DELETE")
    @DeleteMapping("/mypage/intro_stack")
    public ResponseEntity<Long> delete(@RequestBody IntroStackNoDto request){
        introStackService.delete(request.getIntroStackNo());
        return new ResponseEntity<>(request.getIntroStackNo(), HttpStatus.OK);
    }

}



