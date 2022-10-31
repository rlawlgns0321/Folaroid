package com.folaroid.portfolio.api.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "UserAPI", tags={"User"})
@RestController
@RequiredArgsConstructor
public class UserController {

//    @ApiOperation(value = "마이페이지 - 필수 정보",
//            notes="user_name이 빈 값인지 아닌지를 판단하여 '최초 정보를 작성해주세요' 문구를 보여줄지 아닐지 결정",
//            httpMethod = "GET")
//    @GetMapping("/mypage/default")
//    public UserDto EssentialInformation(
//            @RequestBody @Valid CustomerUpdateReq request
//    ) {
//    }

    @Data
    @AllArgsConstructor
    static class UserDto {
        private long userNo;
        private String userGithubId;
        private String userName;
        private java.sql.Date userBirth;
        private String userEmail;
        private String userPhone;

//        public UserDto(User user,) {
//
//        }
    }



}
