import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRepo, getRepos } from '../lib/api/githubAPI';

export const getReposThunk = createAsyncThunk('github/GET_REPOS', async () => {
    const response = await getRepos();
    return response.data;
});

export const getRepoThunk = createAsyncThunk(
    'github/GET_REPO',
    async (pjtId) => {
        const response = await getRepo(pjtId);
        return response.data;
    }
);

export const github = createSlice({
    name: 'github',
    initialState: {
        repos: null,
        repo: null,
        isRepo: false,
    },
    reducers: {
        changeSelect: (state, { payload }) => {
            state.repos = state.repos.map((repo) => {
                repo.checked = false;
                return repo;
            });
            state.repos[payload].checked = true;
        },
        clearRepos: (state) => {
            state.repos = null;
        },
        clearRepo: (state) => {
            state.isRepo = false;
        },
    },
    extraReducers: {
        [getReposThunk.fulfilled.type]: (state, { payload }) => {
            state.repos = payload.map((repo) => {
                repo.checked = false;
                return repo;
            });
        },
        [getRepoThunk.pending.type]: (state) => {
            state.isRepo = false;
        },
        [getRepoThunk.fulfilled.type]: (state, { payload }) => {
            state.repo = payload;
            state.isRepo = true;
        },
    },
});

export default github.reducer;
