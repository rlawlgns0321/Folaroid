import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/authAPI';

export const getUserThunk = createAsyncThunk('auth/GetUser', async (code) => {
    const response = await api.authCode(code);
    return response.data;
});

export const auth = createSlice({
    name: 'auth',
    initialState: {
        jwt: null,
        user: null,
    },
    reducers: {},
    extraReducers: {
        [getUserThunk.fulfilled.type]: (state, {payload}) => {
            state.jwt = payload.jwt;
            state.user = payload.user;
        },
    },
});

export default auth.reducer;
