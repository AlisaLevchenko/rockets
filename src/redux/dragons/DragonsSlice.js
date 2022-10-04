import { createSlice } from "@reduxjs/toolkit";
import { getRockets } from "./DragonsOperations";

const dragonsSlice = createSlice({
  name: "rockets",
  initialState: {
    items: [],
    isLoading: false,
    activeIdRocket: "",
    error: null,
  },
  reducers: {
    setIdRocket(state, { payload }) {
      state.activeIdRocket = payload;
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getRockets.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getRockets.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setIdRocket } = dragonsSlice.actions;
export default dragonsSlice.reducer;
