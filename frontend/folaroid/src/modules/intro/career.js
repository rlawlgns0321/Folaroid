import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getCareer = createAsyncThunk(
    'career/getCareer',
    async (introNo) => {
        const response = await api.getCareer(introNo);
        return response.data;
    }
);

export const createCareer = createAsyncThunk(
    'career/createCareer',
    async (data) => {
        const response = await api.createCareer(data);
        console.log(response);
        return {
            introCareerNo: response.data,
            careerComName: data.careerComName,
            careerDate: data.careerDate,
            careerDetail: data.careerDetail,
            careerJob: data.careerJob,
            careerResult: data.careerResult,
        };
    }
);

export const deleteCareer = createAsyncThunk(
    'career/deleteCareer',
    async (introCareerNo) => {
        const response = await api.deleteCareer(introCareerNo);
        console.log(response);
        return response.data;
    }
);

export const career = createSlice({
    name: 'career',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getCareer.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createCareer.fulfilled.type]: (state, action) => {
            state.push({
                careerComName: action.payload.careerComName,
                careerDate: action.payload.careerDate,
                careerDetail: action.payload.careerDetail,
                careerJob: action.payload.careerJob,
                careerResult: action.payload.careerResult,
                introCareerNo: action.payload.introCareerNo,
            });
        },
        [deleteCareer.fulfilled.type]: (state, action) => {
            return state.filter(
                (item) => item.introCareerNo !== action.payload
            );
        },
    },
});

export default career.reducer;
