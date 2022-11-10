import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/portfolioProjectAPI';

export const getProjectsThunk = createAsyncThunk(
    'portfolioProject/GET_PROJECTS',
    async (pfNo) => {
        const response = await api.getProjects(pfNo);
        return response.data;
    }
);

export const deleteProjectThunk = createAsyncThunk(
    'portfolioProject/DELETE_PROJECT',
    async (pjtNo) => {
        const response = await api.deleteProject(pjtNo);
        return { data: response.data, pjtNo };
    }
);

export const portfolioProject = createSlice({
    name: 'portfolioProject',
    initialState: {
        projects: [],
        isloading: false,
    },
    reducers: {
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(
                (project) => project.id !== action.payload
            );
        },
        updateProject: () => {},
    },
    extraReducers: {
        [getProjectsThunk.fulfilled.type]: (state, action) => {
            state.projects = action.payload;
        },
        [deleteProjectThunk.fulfilled.type]: (state, { payload }) => {
            state.projects = state.projects.filter(
                (pjt) => pjt.pjtNo !== payload.pjtNo
            );
        },
    },
});

export default portfolioProject.reducer;
