// 1. import: configureStore
import { configureStore } from "@reduxjs/toolkit";
// 1A: import the reducer from slice
import plannerReducer from "./features/planner/plannerSlice";

// 2. Create a store using configureStore
export const store = configureStore({
    reducer: {
        planner: plannerReducer
    }
});

// 3. State based types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;