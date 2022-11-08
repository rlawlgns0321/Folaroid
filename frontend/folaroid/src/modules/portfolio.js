import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { readSimplePortfolio } from '../lib/api/portfolioAPI';

export const getSimplePortfolioListThunk = createAsyncThunk(
    'portfolio/SIMPLE_LIST',
    async (userNo) => {
        const response = await readSimplePortfolio(userNo);
        return response.data;
    }
)

export const portfolio = createSlice({
    name: 'portfolio',
    initialState: {
        simple: [],
    },
    reducers: {},
    extraReducers: {
        [getSimplePortfolioListThunk.fulfilled.type] : (state, action) => {
            state.simple = action.payload;
        }
    },
});

export default portfolio.reducer;
