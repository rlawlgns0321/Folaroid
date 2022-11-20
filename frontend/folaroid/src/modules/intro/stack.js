import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getHash = createAsyncThunk('stack/getHash', async () => {
    const response = await api.getHash();
    return response.data;
});

export const getStack = createAsyncThunk('stack/getStack', async (introNo) => {
    const response = await api.getStack(introNo);
    return response.data;
});

export const createStack = createAsyncThunk(
    'stack/createStack',
    async (data) => {
        const response = await api.createStack(data);
        return response.data;
    }
);

export const deleteStack = createAsyncThunk(
    'stack/deleteStack',
    async (introStackNo) => {
        const response = await api.deleteStack(introStackNo);
        return response.data;
    }
);

export const stack = createSlice({
    name: 'stack',
    initialState: {
        hash: [],
        stack: [],
    },
    extraReducers: {
        [getHash.fulfilled]: (state, action) => {
            return {
                ...state,
                hash: action.payload,
            };
        },

        [getStack.fulfilled]: (state, action) => {
            return {
                ...state,
                stack: action.payload,
            };
        },
        [createStack.fulfilled.type]: (state, action) =>
            void state.stack.push(action.payload),

        [deleteStack.fulfilled.type]: (state, action) => {
            const newStack = state.stack.filter(
                (item) => item.introStackNo !== action.payload
            );
            state.stack = newStack;
        },
    },
});

export default stack.reducer;
