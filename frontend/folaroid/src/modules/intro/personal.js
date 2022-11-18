import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getPersonal = createAsyncThunk(
    'personal/getPersonal',
    async (intro_no) => {
        const response = await api.getPersonal(intro_no);
        console.log(intro_no)
        return response.data;
    }
);

export const updatePersonal = createAsyncThunk(
    'personal/updatePersonal',
    async (data) => {
        const response = await api.updatePersonal(data);
        console.log(response)
        return {
            userBirth: data.userBirth,
            userName: data.userName,
            userEmail: data.userEmail,
            userPhone: data.userPhone,
        };
    }
);


export const findByGithub = createAsyncThunk(
    'personal/findByGithub', //  action의 type
    async ({ user_github_id }) => {
        const response = await api.findByGithub(user_github_id);
        return response.data;
    }
);

export const findByPfNo = createAsyncThunk(
    'personal/findByPfNo',
    async (pfNo) => {
        const response = await api.findByPfNo(pfNo);
        return response.data
    }
)

export const personal = createSlice({
    name: 'personal',
    initialState: {
        userBirth: '',
        userEmail: '',
        userGithubId: '',
        userName: '',
        userNo: '',
        userPhone: '',
        pfNoIntro: '',
    },
    extraReducers: {
        [updatePersonal.fulfilled.type]: (state, action) => {
            console.log('fulfilled', action.payload);
            state.userName = action.payload.userName
            state.userBirth = action.payload.userBirth
            state.userEmail = action.payload.userEmail
            state.userPhone = action.payload.userPhone
            console.log(state)
        },
        [findByGithub.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [getPersonal.fulfilled.type]: (state, action) => {
            console.log(action)
            return action.payload;
        },
        [findByPfNo.fulfilled.type]: (state, action) => {
            state.pfNoIntro = action.payload
        }
    },
});

export default personal.reducer;
