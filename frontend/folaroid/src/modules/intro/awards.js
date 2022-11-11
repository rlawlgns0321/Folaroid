import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getAwards = createAsyncThunk(
    'awards/getAwards',
    async (introNo) => {
        const response = await api.getAwards(introNo);
        return response.data;
    }
);

export const createAward = createAsyncThunk(
    'awards/createAward',
    async (data) => {
        const response = await api.createAward(data);
        return {
            introAwardsNo: response.data,
            awardsDate: data.awardsDate,
            awardsDetail: data.awardsDetail,
            awardsIssuer: data.awardsIssuer,
            awardsName: data.awardsName,
        };
    }
);

export const deleteAward = createAsyncThunk(
    'awards/deleteAward',
    async (introAwardNo) => {
        const response = await api.deleteAward(introAwardNo);
        console.log(response);
        return response.data;
    }
);

export const awards = createSlice({
    name: 'award',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getAwards.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createAward.fulfilled.type]: (state, action) => {
            state.push({
                awardsDate: action.payload.awardsDate,
                awardsDetail: action.payload.awardsDetail,
                awardsIssuer: action.payload.awardsIssuer,
                awardsName: action.payload.awardsName,
                introAwardsNo: action.payload.introAwardsNo,
            });
        },
        [deleteAward.fulfilled.type]: (state, action) => {
            return state.filter(
                (item) => item.introAwardsNo !== action.payload
            );
        },
    },
});

export default awards.reducer;
