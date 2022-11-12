import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getImage = createAsyncThunk('imgae/getImage', async (introNo) => {
    const response = await api.getImage(introNo);
    return response.data;
});

export const updateImage = createAsyncThunk(
    'image/updateImage',
    async (intro_no, data) => {
        const response = await api.updateImage(intro_no, data);
        console.log(response.data);
        return response.data;
    }
);

export const image = createSlice({
    name: 'image',
    initialState: { imageLocation: '' },
    extraReducers: {
        [getImage.fulfilled]: (state, action) => {
            state.imageLocation = action.payload.introImageLocation;
            console.log(state);
        },
        [updateImage.fulfilled]: (state, action) => {
            state.imageLocation = action.payload.introImageLocation;
        },
    },
});

export default image.reducer;
