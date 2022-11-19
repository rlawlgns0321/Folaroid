package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.HashTag;
import com.folaroid.portfolio.db.entity.IntroStack;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class IntroStackDto {

    @Getter
    @AllArgsConstructor
    public static class StackNoDto {
        private Long introNo;
        private Long hashNo;
    }

    @Getter
    @AllArgsConstructor
    public static class StackNameDto {
        private Long introNo;
        private Long hashNo;
        private String hashName;

        private String hashImageLocation;
        private Long introStackNo;

        public StackNameDto(IntroStack introStack, HashTag hashTag) {
            this.introNo = introStack.getIntroNo();
            this.introStackNo = introStack.getIntroStackNo();
            this.hashNo = introStack.getHashNo();
            this.hashName = hashTag.getHashName();
            this.hashImageLocation = hashTag.getHashImageLocation();
        }
    }

    @Getter
    @AllArgsConstructor
    public static class IntroStackNoDto {
        private Long introStackNo;
    }

    @Getter
    @AllArgsConstructor
    public static class AllIntroStackDto {
        private Long introStackNo;
        private Long hashNo;
        private String hashName;

        private String hashImageLocation;

        public AllIntroStackDto(IntroStack introStack, HashTag hashTag) {
            this.introStackNo = introStack.getIntroStackNo();
            this.hashNo = introStack.getHashNo();
            this.hashName = hashTag.getHashName();
            this.hashImageLocation = hashTag.getHashImageLocation();
        }
    }

}
