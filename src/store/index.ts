import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // mock reducer
        counter: (state = 0) => state,
    },
});