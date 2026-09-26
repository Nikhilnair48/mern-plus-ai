// 1. import createSlice
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// 2. Type definitions for state
type PlannerState = {
    savedSessionIds: string[];
}

// 3. Initial state
const initialState: PlannerState = {
    savedSessionIds: []
}

// Not relevant anymore -> defining actions
// type SessionSavedAction = { type: "SessionSaved", payload: string };

// 4. Create a slice
const plannerSlice = createSlice({
    name: "planner",
    // initialState: initialState,
    initialState,
    reducers: {
        sessionSaved(state, action: PayloadAction<string>) {
            if (!state.savedSessionIds.includes(action.payload)) {
                state.savedSessionIds.push(action.payload);
            }
        },
        sessionRemoved(state, action: PayloadAction<string>) {
            // if action.payload NOT equal to savedSessionIds[i] -> keep it; else: filter it out
            state.savedSessionIds = state.savedSessionIds.filter((id) => id !== action.payload);
        },
        plannerCleared(state) {
            state.savedSessionIds = [];
        }
    }
});


// 5. Export the slice + reducer
export const { sessionSaved, sessionRemoved, plannerCleared } = plannerSlice.actions;
export default plannerSlice.reducer;