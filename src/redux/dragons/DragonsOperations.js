import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRocketsApi } from "../../api/RocketApi";

export const getRockets = createAsyncThunk(
  "getRockets",
  async (param, thunkApi) => {
    try {
      const dragon = await getRocketsApi(param);
      return dragon;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
