package com.folaroid.portfolio.api.dto;

import lombok.*;

public class IntroArchivingDto {
    @Getter
    @AllArgsConstructor
    public static class IntroArchivingNo{
        private Long introArchivingNo;
    }

    @Getter
    @AllArgsConstructor
    public static class IntroArchivingDetail{
        private Long introNo;
        private String archivingName;
        private String archivingLink;
    }
}
