import { configureStore } from "@reduxjs/toolkit";
import plannerReducer from "../features/planner/plannerSlice";
import sessionsReducer from "../features/sessions/sessionsSlice";

export const store = configureStore({
  reducer: {
    planner: plannerReducer,
    sessions: sessionsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
