import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getActivity = createAsyncThunk(
    'activity/getActivity',
    async (intro_no) => {
        const response = await api.getActivity(intro_no);
        return response.data;
    }
);

export const createActivity = createAsyncThunk(
    'activity/createActivity',
    async ({introNo, activityDate, activityDetail, activityName, activityUrl}) => {
        const response = await api.createActivity({introNo, activityDate, activityDetail, activityName, activityUrl});
        console.log(response);
        return {
            introActivityNo: response.data,
            activityDate: activityDate,
            activityDetail: activityDetail,
            activityName: activityName,
            activityUrl: activityUrl,
        };
    }
);

export const deleteActivity = createAsyncThunk(
    'activity/deleteActivity',
    async (introActivityNo) => {
        const response = await api.deleteActivity(introActivityNo);
        console.log(response);
        return response.data;
    }
);

export const activity = createSlice({
    name: 'activity',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getActivity.fulfilled]: (state, action) => {
            return action.payload;
        },
        [createActivity.fulfilled.type]: (state, action) => {
            state.push({
                introActivityNo: action.payload.introActivityNo,
                activityDate: action.payload.activityDate,
                activityDetail: action.payload.activityDetail,
                activityName: action.payload.activityName,
                activityUrl: action.payload.activityUrl,
            });
        },
        [deleteActivity.fulfilled.type]: (state, action) => {
            return state.filter(
                (activity) => activity.introActivityNo !== action.payload
            );
        },
    },
});

export default activity.reducer;
