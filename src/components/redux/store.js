import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobslice from "./jobSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        job: jobslice
        
    },
});

export default store;