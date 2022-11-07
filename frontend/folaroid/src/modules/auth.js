import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/authAPI';

export const getUserThunk = createAsyncThunk('auth/GetUser', async (code) => {
    let userResponse = await api.authCode(code);
    let userGithubId = userResponse.data.user.userGithubId;
    let userIntroNoResponse = await api.introNo(userGithubId);
    userResponse.data.intro_no = userIntroNoResponse.data;
    console.log(userResponse.data);
    return userResponse.data;
});

export const auth = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        tempSetUser: (state, { payload }) => {
            state.user = JSON.parse(payload.user);
        },
        clearUser: (state, {payload}) => {
            state.user = null;
        }
    },
    extraReducers: {
        [getUserThunk.fulfilled.type]: (state, { payload }) => {
            console.log(payload);
            state.user = payload.user;
            state.user.jwt = payload.jwt;
            state.user.intro_no = payload.intro_no;
        },
    },
});

export default auth.reducer;
