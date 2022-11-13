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

export const createProjectThunk = createAsyncThunk(
    'portfolioProject/CREATE_PROJECT',
    async (payload) => {
        let pjt = {
            pfNo: payload.pfNo,
            pjtGithubUrl: payload.repo.html_url,
            pjtStar: payload.repo.stargazers_count,
            pjtTitle: payload.repo.name,
            pjtSubtitle: payload.repo.description,
        };
        console.log(pjt);
        const response = await api.createProject(pjt);
        pjt.pjtNo = response.data;
        return pjt;
    }
);

export const portfolioProject = createSlice({
    name: 'portfolioProject',
    initialState: {
        projects: [],
        isloading: false,
        project: {},
    },
    reducers: {},
    extraReducers: {
        [getProjectsThunk.fulfilled.type]: (state, action) => {
            state.projects = action.payload;
        },
        [deleteProjectThunk.fulfilled.type]: (state, { payload }) => {
            state.projects = state.projects.filter(
                (pjt) => pjt.pjtNo !== payload.pjtNo
            );
        },
        [createProjectThunk.fulfilled.type]: (state, { payload }) => {
            state.project = payload;
        },
    },
});

export default portfolioProject.reducer;
