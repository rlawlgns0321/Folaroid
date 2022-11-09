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
    reducers: {
        changeSelect: (state, { payload }) => {
            state.repos = state.repos.map((repo) => {
                repo.checked = false;
                return repo;
            });
            state.repos[payload].checked = true;
        },
    },
    extraReducers: {
        [getReposThunk.fulfilled.type]: (state, { payload }) => {
            state.repos = payload.map((repo) => {
                repo.checked = false;
                return repo;
            });
        },
    },
});

export default github.reducer;
