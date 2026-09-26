// Imports
// 1. createAsyncThunk
import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// 2. axios
import axios from "axios";
// 3. Session type
import type { Session } from "../../types/sessions";

// 4. RequestStatus
export type RequestStatus = "idle" | "pending" | "succeeded" | "rejected";
// 5. SessionsState
type SessionsState = {
    items: Session[];
    status: RequestStatus;
    error: string | null;
}
// 6. intitialState
const initialState: SessionsState = {
    items: [],
    status: "idle",
    error: null
};

// 7. fetchSessions
export const fetchSessions =
    createAsyncThunk(
        "sessions/fetchSessions",
        async () => {
            // what about error handling? try/catch
            const response = await axios.get<Session[]>("/api/sessions");
            return response.data;
        }
    );

export const fetchSessionById =
    createAsyncThunk(
        "sessions/fetchSessionById",
        async (sessionId: string) => {
            const response = await axios.get<Session[]>(`/api/sessions/${sessionId}`);
            return response.data;
        }
    );

const sessionSlice = createSlice({
    name: "sessions",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<SessionsState>) => {
        // fetchSessions lifecycle cases
        // pending, fulfilled, rejected
        builder
            .addCase(fetchSessions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchSessions.pending, (state, _action) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(fetchSessions.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.error.message ?? "Could not load sessions.";
            })
    }
});

export default sessionSlice.reducer;