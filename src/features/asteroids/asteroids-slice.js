import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

export const loadAsteroids = createAsyncThunk(
  "@@asteroids/load-asteroids",
  async (_, { extra: { client, api } }) => {
    return client.get(api.ALL_ASTEROIDS);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: {},
};

const asteroidsSlice = createSlice({
  name: "@@asteroids",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAsteroids.pending, (state, _) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadAsteroids.fulfilled, (state, action) => {
        state.status = "recieved";
        state.list = action.payload.data;
        state.error = null;
      })
      .addCase(loadAsteroids.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const asteroidsReducer = asteroidsSlice.reducer;
const selectAsteroidsStatus = (state) => state.asteroids.status;
const selectAsteroidsError = (state) => state.asteroids.error;
const selectAsteroidsData = (state) =>
  state.asteroids.list && state.asteroids.list["near_earth_objects"]
    ? state.asteroids.list["near_earth_objects"]
    : {};

export const selectAsteroids = createSelector(
  selectAsteroidsStatus,
  selectAsteroidsError,
  selectAsteroidsData,
  (status, error, asteroidsData) => {
    const dataArray = Object.values(asteroidsData).flat();
    return {
      status: status,
      error: error,
      data: dataArray,
    };
  }
);

export const selectAsteroid = (state, name) => {
  const data =
    state.asteroids.list && state.asteroids.list["near_earth_objects"]
      ? state.asteroids.list["near_earth_objects"]
      : {};
  const dataArray = Object.values(data).flat();
  return dataArray.find((el) => el.name === name);
};
