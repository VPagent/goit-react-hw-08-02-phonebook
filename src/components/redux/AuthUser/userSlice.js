import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./userInitialState";
import { currentUser, login, logOut, register } from "./userOperations";

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [register.pending] : (state, _) => state.userLoading = true,
        [register.fulfilled]: (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.userLoading = false;
        },
        [login.fulfilled]: (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.userLoading = false;
        },
        [currentUser.fulfilled]: (state, {payload}) => {
            state.user = payload;
            state.isLoggedIn = true;
        },
        [currentUser.rejected]: (state, _) => {
            state.user = {name: null, email:  null};
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.fulfilled] : (state, _) => {
            state.user = {name: null, email:  null};
            state.token = null;
            state.isLoggedIn = false;
        }
    }
})