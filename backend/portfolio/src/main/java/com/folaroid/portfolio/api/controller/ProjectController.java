package com.folaroid.portfolio.api.controller;

import com.folaroid.portfolio.api.dto.ProjectDto;
import com.folaroid.portfolio.api.service.ProjectService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(value = "프로젝트", tags={"Project"})
@RequestMapping("/project")
@RestController
@RequiredArgsConstructor
public class ProjectController {
    private final ProjectService projectService;

    /**
     * 프로젝트 등록
     */
    @PostMapping
    @ApiOperation(value = "프로젝트 등록", notes = "프로젝트를 등록한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<Long> saveProject(@RequestBody ProjectDto.projectRequest projectRequest){
        Long projectNo = projectService.saveProject(projectRequest);
        return new ResponseEntity<>(projectNo, HttpStatus.OK);
    }

    /**
     * 프로젝트 삭제
     */
    @DeleteMapping("{pjtNo}")
    @ApiOperation(value = "프로젝트 삭제", notes = "프로젝트를 삭제한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 404, message = "없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<?> deleteProject(@PathVariable Long pjtNo){
        projectService.deleteProject(pjtNo);
        return ResponseEntity.status(200).body(pjtNo);
    }
}
