import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { repos } from '../lib/api/githubAPI';

export const getReposThunk = createAsyncThunk('github/GET_REPOS', async () => {
    const response = await repos();
    return response.data;
});

export const github = createSlice({
    name: 'github',
    initialState: {
        repos: null,
    },
    reducers: {},
    extraReducers: {
        [getReposThunk.fulfilled.type]: (state, action) => {
            state.repos = action.payload;
        },
    },
});

export default github.reducer;
