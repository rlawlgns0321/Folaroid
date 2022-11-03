import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/portfolioProjectAPI';

export const getProjects = createAsyncThunk(
    'portfolioProject/GetProjects',
    async () => {
        const response = await api.getProjects();
        return response.data;
    }
);

export const portfolioProject = createSlice({
    name: 'portfolioProject',
    initialState: {
        projects: [],
    },
    reducers: {
        deleteProject: (state, action) => {
            return {
                projects: state.projects.filter(
                    (project) => project.id !== action.payload
                ),
            };
        },
    },
    extraReducers: {
        [getProjects.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state.projects = action.payload;
        },
    },
});

export default portfolioProject.reducer;
