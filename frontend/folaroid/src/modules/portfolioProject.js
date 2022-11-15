import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/portfolioProjectAPI';

export const getProjectsThunk = createAsyncThunk(
    'portfolioProject/GET_PROJECTS',
    async (pfNo) => {
        const response = await api.getProjects(pfNo);
        return response.data;
    }
);

export const getProjectThunk = createAsyncThunk(
    'portfolioProject/GET_PROJECT',
    async (pjtNo) => {
        const response = await api.getProject(pjtNo);
        return response.data;
    }
)

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
            pjtImagesUrl: payload.repo.imagesUrl,
            pjtOneImageLocation:
                'https://images.velog.io/images/hosickk/post/0c6640b0-8bb7-4d10-95af-a5b4a58046ee/project-planning-header@2x.png',
            pjtId: payload.repo.id,
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
        isProject: false,
        project: null,
    },
    reducers: {
        changeInput: (state, action) => {
            const { name, value } = action.payload;
            state.project[name] = value;
        },
        changeProjectImage: (state, action) => {
            state.project.pjtOneImageLocation = action.payload;
        },
        clearProject: (state, action) => {
            state.project = null;
            state.isProject = false;
        },
    },
    extraReducers: {
        [getProjectsThunk.fulfilled.type]: (state, action) => {
            state.projects = action.payload;
        },
        [getProjectThunk.fulfilled.type]:(state, action) => {
            state.project = action.payload;
        },
        [deleteProjectThunk.fulfilled.type]: (state, { payload }) => {
            state.projects = state.projects.filter(
                (pjt) => pjt.pjtNo !== payload.pjtNo
            );
        },
        [createProjectThunk.pending.type]: (state) => {
            state.isProject = false;
        },
        [createProjectThunk.fulfilled.type]: (state, { payload }) => {
            state.project = payload;
            state.isProject = true;
        },
    },
});

export default portfolioProject.reducer;
