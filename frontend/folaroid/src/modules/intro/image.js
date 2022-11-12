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
        return response.data;
    }
);

export const certification = createSlice({
    name: 'certification',
    initialState: { imageLocation: '' },
    extraReducers: {
        [getImage.fulfilled]: (state, action) => {
            state.imageLocation = action.payload.intro_image_location;
            console.log(state)
        },
        [updateImage.fulfilled]: (state, action) => {
            state.imageLocation = action.payload.intro_image_location
        }
    },
});

export default certification.reducer;
