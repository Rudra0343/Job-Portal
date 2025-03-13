import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        allJobs: [],
        singleJobs:null,
    },
    reducers:{
        setAllJobs:(state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJobs:(state, action) => {
            state.singleJobs = action.payload;
        }
    }
});

export const { setAllJobs, setSingleJobs } = jobSlice.actions;
export default jobSlice.reducer;