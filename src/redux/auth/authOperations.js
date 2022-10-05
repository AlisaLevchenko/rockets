import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUserApi,
  loginUserApi,
  getCurrentUserApi,
} from "../../api/RocketApi";

export const signupUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const postedUserData = await registerUserApi(userData);
      return postedUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const postedUserData = await loginUserApi(userData);
      return postedUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, thunkApi) => {
    try {
      const { idToken } = thunkApi.getState().auth;
      const userData = await getCurrentUserApi(idToken);
      return userData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
