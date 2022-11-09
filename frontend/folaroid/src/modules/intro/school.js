import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getSchool = createAsyncThunk(
    'school/getSchool',
    async (introNo) => {
        const response = await api.getSchool(introNo);
        console.log(response.data)
        return response.data;
    }
);

export const createSchool = createAsyncThunk(
    'school/createSchool',
    async (data) => {
        const response = await api.createSchool(data);
        console.log(response);
        return response.data;
    }
);

export const deleteSchool = createAsyncThunk(
    'school/deleteSchool',
    async (introSchoolNo) => {
        const response = await api.deleteSchool(introSchoolNo);
        console.log(response);
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
        [createSchool.fulfilled.type]: (state, action) =>
            state.push({
                schoolAdmissionDate: action.payload.schoolAdmissionDate,
                schoolCredit: action.payload.schoolCredit,
                schoolDegree: action.payload.schoolDegree,
                schoolGraduationDate: action.payload.schoolGraduationDate,
                schoolMajor: action.payload.schoolMajor,
                schoolMaxCredit: action.payload.schoolMaxCredit,
                schoolName: action.payload.schoolName,
            }),
        [deleteSchool.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = state.filter(
                (item) => item.introSchoolNo !== action.payload
            );
        },
    },
});

export default school.reducer;
