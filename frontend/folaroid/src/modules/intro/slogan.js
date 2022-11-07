import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

// export const getSlogan = createAsyncThunk(
//     'slogan/getSlogan',
//     async ({ intro_no }) => {
//         const response = await api.getSlogan(intro_no);
//         return response.data;
//     }
// );

export const createSlogan = createAsyncThunk(
    'slogan/createSlogan',
    async (data) => {
        const response = await api.createSlogan(data);
        console.log(response);
        return response.data;
    }
);

export const deleteSlogan = createAsyncThunk(
    'slogan/deleteSlogan',
    async ({ intro_slogan_no }) => {
        const response = await api.deletePersonal(intro_slogan_no);
        console.log(response);
        return response.data;
    }
);

export const slogan = createSlice({
    name: 'slogan',
    initialState: {
        intro_slogan_no: null,
        sloganContent: '',
    },
    reducers: {},
    extraReducers: {
        // [getSlogan.fulfilled]: (state, action) => {
        //     state.sloganContent = action.payload.sloganContent;
        // },
        [createSlogan.fulfilled.type]: (state, action) => {
            state.intro_slogan_no = action.payload.intro_slogan_no;
            state.sloganContent = action.payload.sloganContent;
        },
        [deleteSlogan.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = {
                intro_slogan_no: null,
                sloganContent: '',
            };
        },
    },
});

export default slogan.reducer;
