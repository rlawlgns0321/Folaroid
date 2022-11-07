import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

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

// export const findByGithub = createAsyncThunk(
//     'personal/findByGithub', //  action의 type
//     async ({ user_github_id }) => {
//         const response = await api.findByGithub(user_github_id);
//         return response.data;
//     }
// );

export const slogan = createSlice({
    name: 'slogan',
    initialState: {
        intro_slogan_no: null,
        intro_no: '',
        sloganContent: '',
    },
    reducers: {},
    extraReducers: {
        [getSlogan.fulfilled]: (state, action) => {
            state.sloganContent = action.payload.sloganContent;
        },
        [createSlogan.fulfilled.type]: (state, action) => {
            state.sloganContent = action.payload.sloganContent
        },
        [deletePersonal.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = {
                intro_slogan_no: null,
                intro_no: ''
            };
        },
        [findByGithub.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

export default slogan.reducer;
