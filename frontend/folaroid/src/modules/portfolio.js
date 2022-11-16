import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { flattenJSON } from 'three/src/animation/AnimationUtils';
import {
    createPortfolio,
    deletePortfolio,
    getPortfolio,
    readSimplePortfolio,
} from '../lib/api/portfolioAPI';

export const getSimplePortfolioListThunk = createAsyncThunk(
    'portfolio/SIMPLE_LIST',
    async (userNo) => {
        const response = await readSimplePortfolio(userNo);
        return response.data;
    }
);

export const createPortfolioThunk = createAsyncThunk(
    'portfolio/CREATE_PORTFOLIO',
    async (userNo) => {
        const response = await createPortfolio({ userNo });
        return response.data;
    }
);

export const deletePortFolioThunk = createAsyncThunk(
    'portfolio/DELETE_PORTFOLIO',
    async (pfNo) => {
        const response = await deletePortfolio(pfNo);
        return { pfNo, response: response.data };
    }
);

export const getPortFolioThunk = createAsyncThunk(
    'portfolio/GET_PORTFOLIO',
    async (pfNo) => {
        const response = await getPortfolio(pfNo);
        return response.data;
    }
)

export const portfolio = createSlice({
    name: 'portfolio',
    initialState: {
        simple: [],
        pf: null,
        isLoading: false,
    },
    reducers: {
        clearPf: (state, action) => {
            state.isLoading = false;
        },
    },
    extraReducers: {
        [getSimplePortfolioListThunk.fulfilled.type]: (state, action) => {
            state.simple = action.payload;
        },
        [createPortfolioThunk.pending.type] : (state) => {
            state.isLoading = false;
        },
        [createPortfolioThunk.fulfilled.type]: (state, action) => {
            state.pf = action.payload;
            state.isLoading = true;
        },
        [deletePortFolioThunk.fulfilled.type]: (state, {payload}) => {
            state.simple = state.simple.filter((pf) => pf.pfNo !== payload.pfNo);
        },
        [getPortFolioThunk.pending.type]: (state) => {
            state.isLoading = false;
        },
        [getPortFolioThunk.fulfilled.type]: (state, action) => {
            state.pf = action.payload;
            state.isLoading = true;
        }
    },
});

export default portfolio.reducer;
