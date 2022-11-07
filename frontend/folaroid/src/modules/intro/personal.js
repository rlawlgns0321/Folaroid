import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

// export const getPersonal = createAsyncThunk(
//     'personal/getPersonal',
//     async (intro_no) => {
//         const response = await api.getPersonal(intro_no);
//         return response.data;
//     }
// );

export const createPersonal = createAsyncThunk(
    'personal/createPersonal',
    async (data) => {
        const response = await api.createPersonal(data);
        return response.data;
    }
);

export const deletePersonal = createAsyncThunk(
    'personal/deletePersonal',
    async ({ intro_personal_data_no }) => {
        const response = await api.deletePersonal(intro_personal_data_no);
        return response.data;
    }
);

export const findByGithub = createAsyncThunk(
    'personal/findByGithub', //  action의 type
    async ({ user_github_id }) => {
        const response = await api.findByGithub(user_github_id);
        return response.data;
    }
);

export const personal = createSlice({
    name: 'personal',
    initialState: {
        intro_peprsonal_data_no : null,
        persona_data_birth: '',
        personal_data_email: '',
        personal_data_name: '',
        personal_data_phone: '',
    },
    extraReducers: {
        [createPersonal.fulfilled.type]: (state, action) => {
            console.log('fulfilled',action.payload)
            state.intro_personal_data_no = action.payload.intro_personal_data_no;
            state.persona_data_birth = action.payload.persona_data_birth
            state.personal_data_email = action.payload.personal_data_email
            state.personal_data_name = action.payload.personal_data_name
            state.personal_data_phone = action.payload.personal_data_phone
        },
        [deletePersonal.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = {
                intro_personal_data_no: null,
                persona_data_birth: '',
                personal_data_email: '',
                personal_data_name: '',
                personal_data_phone: '',
            }
        },
        [findByGithub.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});

export default personal.reducer;
