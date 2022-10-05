import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, getCurrentUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    idToken: null,
    user: {
      email: "",
      refreshToken: null,
      localId: null,
    },
  },
  reducers: {
    changeError(state) {
      state.error = null;
    },
    logOut(state) {
      state.user = {
        email: "",
        refreshToken: null,
        localId: null,
      };
      state.idToken = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: {
    [signupUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [signupUser.fulfilled]: (state, { payload }) => {
      const { idToken, ...rest } = payload;
      state.isLoading = false;
      state.user = rest;
      state.idToken = idToken;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { idToken, ...rest } = payload;
      state.isLoading = false;
      state.user = rest;
      state.idToken = idToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurrentUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    },
    [getCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeError, logOut } = authSlice.actions;
export default authSlice.reducer;
