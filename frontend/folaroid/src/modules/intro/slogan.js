import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getSlogan = createAsyncThunk(
    'slogan/getSlogan',
    async ({ introNo }) => {
        const response = await api.getSlogan(introNo);
        return response.data;
    }
);

export const createSlogan = createAsyncThunk(
    'slogan/createSlogan',
    async (data) => {
        const response = await api.createSlogan(data);
        console.log(response);
        return response.data;
    }
);

export const deleteSlogan = createAsyncThunk(
    'slogan/deleteSlogan',
    async ({ intro_slogan_no }) => {
        const response = await api.deletePersonal(intro_slogan_no);
        console.log(response);
        return response.data;
    }
);

export const slogan = createSlice({
    name: 'slogan',
    initialState: {
        introSloganNo: null,
        sloganContent: '',
    },
    reducers: {},
    extraReducers: {
        [getSlogan.fulfilled]: (state, action) => {
            state = action.payload;
        },
        [createSlogan.fulfilled.type]: (state, action) => {
            state.introSloganNo = action.payload.introSloganNo;
            state.sloganContent = action.payload.sloganContent;
        },
        [deleteSlogan.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = {
                introSloganNo: null,
                sloganContent: '',
            };
        },
    },
});

export default slogan.reducer;
