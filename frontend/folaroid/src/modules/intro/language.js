import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getLanguage = createAsyncThunk(
    'language/getLanguage',
    async (introNo) => {
        const response = await api.getLanguage(introNo);
        return response.data;
    }
);

export const createLanguage = createAsyncThunk(
    'language/createLanguage',
    async (data) => {
        const response = await api.createLanguage(data);
        return {
            introLanguageNo: response.data,
            languageDate: data.languageDate,
            languageGrade: data.languageGrade,
            languageName: data.languageName,
            languageTestName: data.languageTestName,
        };
    }
);

export const deleteLanguage = createAsyncThunk(
    'language/deleteLanguage',
    async ( introLanguageNo ) => {
        const response = await api.deleteLanguage(introLanguageNo);
        return response.data;
    }
);

export const language = createSlice({
    name: 'language',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getLanguage.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createLanguage.fulfilled.type]: (state, action) => {
            state.push({
                introLanguageNo: action.payload.introLanguageNo,
                languageDate: action.payload.languageDate,
                languageGrade: action.payload.languageGrade,
                languageName: action.payload.languageName,
                languageTestName: action.payload.languageTestName,
            });
        },
        [deleteLanguage.fulfilled.type]: (state, action) => {
            return state.filter(
                (item) => item.introLanguageNo !== action.payload
            );
        },
    },
});

export default language.reducer;
