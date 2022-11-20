package com.folaroid.portfolio.api.dto;

import com.folaroid.portfolio.db.entity.Intro;
import com.folaroid.portfolio.db.entity.IntroSchool;
import lombok.*;

public class IntroSchoolDto {
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class introSchoolRequest{
        private Long introSchoolNo;
        private Long introNo;
        private String schoolName;
        private String schoolMajor;
        private String schoolDegree;
        private java.sql.Date schoolAdmissionDate;
        private java.sql.Date schoolGraduationDate;
        private Float schoolCredit;
        private Float schoolMaxCredit;

        public IntroSchool toEntity(Intro intro){
            IntroSchool introSchool = IntroSchool.builder()
                    .introSchoolNo(introSchoolNo)
                    .introNo(introNo)
                    .schoolName(schoolName)
                    .schoolMajor(schoolMajor)
                    .schoolDegree(schoolDegree)
                    .schoolAdmissionDate(schoolAdmissionDate)
                    .schoolGraduationDate(schoolGraduationDate)
                    .schoolCredit(schoolCredit)
                    .schoolMaxCredit(schoolMaxCredit)
                    .build();
            return introSchool;
        }

    }

    @Data
    @AllArgsConstructor
    public static class AllIntroSchoolDto{
        private Long introSchoolNo;
        private String schoolName;
        private String schoolMajor;
        private String schoolDegree;
        private java.sql.Date schoolAdmissionDate;
        private java.sql.Date schoolGraduationDate;
        private Float schoolCredit;
        private Float schoolMaxCredit;

        public AllIntroSchoolDto(IntroSchool introSchool){
            this.introSchoolNo = introSchool.getIntroSchoolNo();
            this.schoolName = introSchool.getSchoolName();
            this.schoolMajor = introSchool.getSchoolMajor();
            this.schoolDegree = introSchool.getSchoolDegree();
            this.schoolAdmissionDate = introSchool.getSchoolAdmissionDate();
            this.schoolGraduationDate = introSchool.getSchoolGraduationDate();
            this.schoolCredit = introSchool.getSchoolCredit();
            this.schoolMaxCredit = introSchool.getSchoolCredit();
        }
    }
}
