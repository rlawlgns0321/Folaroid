import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getImage = createAsyncThunk('image/getImage', async (intro_no) => {
    const response = await api.getImage(intro_no);
    return response.data;
});

export const updateImage = createAsyncThunk(
    'image/updateImage',
    async ({intro_no, formData}) => {
        const response = await api.updateImage(intro_no, formData);
        console.log('이미지', response);
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
