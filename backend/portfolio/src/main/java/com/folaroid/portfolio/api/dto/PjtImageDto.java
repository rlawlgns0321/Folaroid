package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.PjtImage;
import jdk.nashorn.internal.objects.annotations.Getter;

public class PjtImageDto {
    public static class pjtImageResponse{
        private Long pjtImageNo;
        private Long pjtNo;
        private String pjtImageLocation;

        public pjtImageResponse(PjtImage pjtImage){
            this.pjtImageNo = pjtImage.getPjtImageNo();
            this.pjtNo = pjtImage.getPjtNo();
            this.pjtImageLocation = pjtImage.getPjtImageLocation();
        }
    }
}
