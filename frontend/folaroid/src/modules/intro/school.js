import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getSchool = createAsyncThunk(
    'school/getSchool',
    async (introNo) => {
        const response = await api.getSchool(introNo);
        return response.data;
    }
);

export const createSchool = createAsyncThunk(
    'school/createSchool',
    async (data) => {
        const response = await api.createSchool(data);
        return {
            introSchoolNo: response.data,
            schoolAdmissionDate: data.schoolAdmissionDate,
            schoolCredit: data.schoolCredit,
            schoolDegree: data.schoolDegree,
            schoolGraduationDate: data.schoolGraduationDate,
            schoolMajor: data.schoolMajor,
            schoolMaxCredit: data.schoolMaxCredit,
            schoolName: data.schoolName,
        };
    }
);

export const deleteSchool = createAsyncThunk(
    'school/deleteSchool',
    async (introSchoolNo) => {
        const response = await api.deleteSchool(introSchoolNo);
        return response.data;
    }
);

export const school = createSlice({
    name: 'school',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getSchool.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createSchool.fulfilled.type]: (state, action) => {
            state.push({
                introSchoolNo: action.payload.introSchoolNo,
                schoolAdmissionDate: action.payload.schoolAdmissionDate,
                schoolCredit: action.payload.schoolCredit,
                schoolDegree: action.payload.schoolDegree,
                schoolGraduationDate: action.payload.schoolGraduationDate,
                schoolMajor: action.payload.schoolMajor,
                schoolMaxCredit: action.payload.schoolMaxCredit,
                schoolName: action.payload.schoolName,
            });
        },
        [deleteSchool.fulfilled.type]: (state, action) => {
            return state.filter(
                (item) => item.introSchoolNo !== action.payload
            );
        },
    },
});

export default school.reducer;
