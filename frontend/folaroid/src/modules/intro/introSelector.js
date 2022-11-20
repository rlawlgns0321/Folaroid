import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activity: false,
    archiving: false,
    awards: false,
    career: false,
    certification: false,
    language: false,
    school: false,
    slogan: false,
    stack: false,
};

export const introSelector = createSlice({
    name: 'introSelector',
    initialState: initialState,
    reducers: {
        onBoard: (state, action) => {
            const title = action.payload;
            state[title] = true;
        },
        outBoard: (state, action) => {
            const title = action.payload;
            state[title] = false;
        },
    },
});

export default introSelector.reducer;
