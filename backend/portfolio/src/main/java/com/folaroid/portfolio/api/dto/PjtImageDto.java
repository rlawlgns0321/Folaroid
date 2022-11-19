package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.PjtImage;

public class PjtImageDto {
    public static class PjtImageResponse{
        private Long pjtImageNo;
        private String pjtImageLocation;

        public PjtImageResponse(PjtImage pjtImage){
            this.pjtImageNo = pjtImage.getPjtImageNo();
            this.pjtImageLocation = pjtImage.getPjtImageLocation();
        }
    }



}
