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

        public StackNameDto(IntroStack introStack, HashTag hashTag) {
            this.introNo = introStack.getIntroNo();
            this.hashNo = introStack.getHashNo();
            this.hashName = hashTag.getHashName();
        }
    }

    @Getter
    @AllArgsConstructor
    public static class IntroStackNoDto {
        private Long introStackNo;
    }

}
