import { createSlice } from "@reduxjs/toolkit"; 
import { fetchFriends } from "./operations";

const initialState = {
    items:[],
    hints:0,
    totalHints:0,
    isLoading:false,
    error:null,
};

const friendSlice = createSlice({
    name:'friends',
    initialState,
    extraReducers:builder=>{
        builder
        .addCase(fetchFriends.pending,state=>{
            state.isLoading = true;
        })
        .addCase(fetchFriends.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.error=false;
            state.items = payload.result;
            state.hints = payload.hints;
            state.totalHints = payload.totalHints;
        })
        .addCase(fetchFriends.rejected,(state,{payload})=>{
            state.isLoading = false;
            state.error = payload;
        })
    }
})

export const friendsReducer = friendSlice.reducer;