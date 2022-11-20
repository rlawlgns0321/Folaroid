import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getArchiving = createAsyncThunk(
    'archiving/getArchiving',
    async (introNo) => {
        const response = await api.getArchiving(introNo);
        return response.data;
    }
);

export const createArchiving = createAsyncThunk(
    'archiving/createArchiving',
    async (data) => {
        const response = await api.createArchiving(data);
        return {
            introArchivingNo: response.data,
            archivingLink: data.archivingLink,
            archivingName: data.archivingName,
        };
    }
);

export const deleteArchiving = createAsyncThunk(
    'archiving/deleteArchiving',
    async (introArchivingNo) => {
        const response = await api.deleteArchiving(introArchivingNo);
        return response.data;
    }
);

export const archiving = createSlice({
    name: 'archiving',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getArchiving.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createArchiving.fulfilled.type]: (state, action) => {
            state.push({
                archivingLink: action.payload.archivingLink,
                archivingName: action.payload.archivingName,
                introArchivingNo: action.payload.introArchivingNo,
            });
        },
        [deleteArchiving.fulfilled.type]: (state, action) => {
            return state.filter(
                (item) => item.introArchivingNo !== action.payload
            );
        },
    },
});

export default archiving.reducer;
