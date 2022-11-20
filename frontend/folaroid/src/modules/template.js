import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTemplate } from '../lib/api/templateAPI';

export const getTemplateThunk = createAsyncThunk(
    'template/GET_TEMPLATE',
    async ({userNo, pfNo}) => {
        const response = await getTemplate(userNo, pfNo);
        return response.data;
    }
)

export const template = createSlice({
    name: 'template',
    initialState: {
        template: null,
    },
    reducers: {},
    extraReducers: {
        [getTemplateThunk.fulfilled.type]:(state, action) => {
            state.template = action.payload;
        }
    },
});

export default template.reducer;
