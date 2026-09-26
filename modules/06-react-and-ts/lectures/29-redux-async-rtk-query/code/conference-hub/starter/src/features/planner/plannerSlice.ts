import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PlannerState = {
  savedSessionIds: string[];
};

const initialState: PlannerState = {
  savedSessionIds: [],
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    sessionSaved(state, action: PayloadAction<string>) {
      if (!state.savedSessionIds.includes(action.payload)) {
        state.savedSessionIds.push(action.payload);
      }
    },
    sessionRemoved(state, action: PayloadAction<string>) {
      state.savedSessionIds = state.savedSessionIds.filter(
        (id) => id !== action.payload,
      );
    },
    plannerCleared(state) {
      state.savedSessionIds = [];
    },
  },
});

export const {
  sessionSaved,
  sessionRemoved,
  plannerCleared,
} = plannerSlice.actions;

export default plannerSlice.reducer;
