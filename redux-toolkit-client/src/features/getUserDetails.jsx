import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Get All User API Call
export const getUsers = createAsyncThunk("getUsers", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
});

const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export default userDetails.reducer;