package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.PjtImage;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class PjtImageDto {
    @Getter
    @AllArgsConstructor
    public static class PjtImageResponse{
        private Long pjtImageNo;
        private String pjtImageLocation;

        public PjtImageResponse(PjtImage pjtImage){
            this.pjtImageNo = pjtImage.getPjtImageNo();
            this.pjtImageLocation = pjtImage.getPjtImageLocation();
        }
    }



}
