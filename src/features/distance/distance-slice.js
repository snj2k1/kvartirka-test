import { createSlice } from "@reduxjs/toolkit";

const distanceSlice = createSlice({
  name: "@@distance",
  initialState: "kilometers",
  reducers: {
    changeDistance: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeDistance } = distanceSlice.actions;
export const distanceReducer = distanceSlice.reducer;
export const selectDistance = (state) => state.distance;
