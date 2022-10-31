package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.folaroid.portfolio.api.dto.UserDto.*;

@Api(value = "UserAPI", tags={"User"})
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

//    @ApiOperation(value = "마이페이지 - 필수 정보",
//            notes="user_name이 빈 값인지 아닌지를 판단하여 '최초 정보를 작성해주세요' 문구를 보여줄지 아닐지 결정",
//            httpMethod = "GET")
//    @GetMapping("/mypage/default")
//    public ResponseEntity<UserDefaultDto> findUserById(@RequestPart(value = "UserNoReq") UserNoReq request) {
//        UserDefaultDto userDefaultDto = userService.findById(request);
//        return new ResponseEntity<>(userDefaultDto, HttpStatus.OK);
//    }

    @ApiOperation(value = "마이페이지 - 유저 개인정보 생성",
            notes="회원 가입 때 개인정보 테이블의 기본키 생성을 위해 기본적으로 요청",
            httpMethod = "POST")
    @PostMapping("/mypage/personal-data")
    public ResponseEntity<Long> save(@RequestBody UserNoReq request){
        Long introNo = userService.save(request);
        return new ResponseEntity<>(introNo, HttpStatus.OK);
    }
}
