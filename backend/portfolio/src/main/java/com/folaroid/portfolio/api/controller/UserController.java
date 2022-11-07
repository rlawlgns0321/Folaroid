package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.IntroDto;
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

    @ApiOperation(value = "유저 회원가입",
            notes="깃헙으로 로그인하면 자동으로 회원가입 진행. 깃헙에서 얻을 수 있는 정보들은 등록. User Table 생성",
            httpMethod = "POST")
    @PostMapping("/signup")
    public ResponseEntity<Long> signup(@RequestBody UserSignupReq request) {
        Long userNo = userService.save(request);
        return new ResponseEntity<>(userNo, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 유저 개인정보",
            notes="생성. 회원 가입 때 개인정보 테이블의 기본키 생성을 위해 기본적으로 요청",
            httpMethod = "POST")
    @PostMapping("/user-info/mypage")
    public ResponseEntity<Long> save(@RequestBody UserNoReq request){
        Long introNo = userService.MakeIntroAndIntroPersonalDataTable(request);
        return new ResponseEntity<>(introNo, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 유저 개인정보",
            notes="조회. 없으면 없는대로 보내기",
            httpMethod = "GET")
    @GetMapping("/user-info/{introNo}")
    public ResponseEntity<UserDefaultDto> find(@PathVariable Long introNo) {
        UserDefaultDto userDefaultDto = userService.find(introNo);
        return new ResponseEntity<>(userDefaultDto, HttpStatus.OK);
    }

    @ApiOperation(value = "마이페이지 - 유저 개인정보",
            notes="수정. 등록 버튼 누를 때마다 전체 정보 다 보냄",
            httpMethod = "PUT")
    @PutMapping("/user-info")
    public ResponseEntity<Long> put(@RequestBody UserDefaultForUpdateDto request) {
        userService.put(request);
        return new ResponseEntity<>(request.getIntroNo(), HttpStatus.OK);
    }



    @ApiOperation(value = "마이페이지 - intro_no",
            notes="intro_no 반환",
            httpMethod = "GET")
    @GetMapping("/user-info/mypage/{user_github_id}")
    public ResponseEntity<Long> getIntroNo(@PathVariable("user_github_id") String userGithubId) {
        Long introNo = userService.getIntroNo(userGithubId);
        return new ResponseEntity<>(introNo, HttpStatus.OK);
    }

}
