import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getHash = createAsyncThunk('stack/getHash', async () => {
    const response = await api.getHash();
    return response.data;
});
export const getStack = createAsyncThunk('stack/getStack', async (introNo) => {
    const response = await api.getStack(introNo);
    console.log(response.data);
    return response.data;
});

export const createStack = createAsyncThunk(
    'stack/createStack',
    async (data) => {
        const response = await api.createStack(data);
        return {
            introStackNo: response.data,
            hashNo: data.hashNo,
        };
    }
);

export const deleteStack = createAsyncThunk(
    'stack/deleteStack',
    async (introStackNo) => {
        const response = await api.deleteStack(introStackNo);
        console.log(response);
        return response.data;
    }
);

export const stack = createSlice({
    name: 'stack',
    initialState: {
        hash: [],
        stack: [],
    },
    reducers: {},
    extraReducers: {
        [getHash.fulfilled]: (state, action) => {
            state.hash = action.payload;
        },

        [getStack.fulfilled]: (state, action) => {
            state.stack = action.payload;
        },
        [createStack.fulfilled.type]: (state, action) => {
            state.push({
                introStackNo: action.payload.introStackNo,
                hashNo: action.payload.hashNo,
            });
        },
        [deleteStack.fulfilled.type]: (state, action) => {
            return state.filter((item) => item.introStackNo !== action.payload);
        },
    },
});

export default stack.reducer;
