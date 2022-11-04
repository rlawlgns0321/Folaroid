import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../lib/api/baseIntroAPI';


export const getPersonal = createAsyncThunk(
    'baseIntro/getPersonal',
    async () => {
        const response = await api.getPersonal();
        return response.data;
    }
);

export const updatePersonal = createAsyncThunk(
    'baseIntro/updatePersonal',
    async ({ id, data }) => {
        const response = await api.updatePersonal(id, data);
        return response.data;
    }
);

export const deletePersonal = createAsyncThunk(
    'baseIntro/deletePersonal',
    async ({ id }) => {
        await api.deletePersonal(id);
        return { id };
    }
);

export const findByGithub = createAsyncThunk(
    'baseIntro/findByGithub', //  action의 type
    async ({ github_id }) => {
        const response = await api.findByGithub(github_id);
        return response.data;
    }
);

export const personalSlice = createSlice({
    name: 'personal',
    initialState: {
        personal: [],
    },
    reducers: {
        getPersonal: (state, action) => {
            return {
                
            }
        },
        updatePersonal: (state, action) => {
            state.personal = action.payload;
        },
        deleteProject: (state, action) => {
            return {
                projects: state.projects.filter(
                    (project) => project.id !== action.payload
                ),
            };
        },
        updateProject: () => {},
    },

    extraReducers: {
        [updatePersonal.fulfilled.type]: (state, action) => {
            console.log('action', action);
            const index = state.findIn;
            state.personal = action.payload;
        },
    },
});

export default personalSlice.reducer;
