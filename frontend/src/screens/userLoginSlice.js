import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  error: null,
};

export const userLoginDetails = createAsyncThunk(
  "userLogin/UserLoginDetails",
  async ({ email, password }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    return data;
  }
);

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLogout: {
      reducer(state, action) {
        delete state.userInfo;
      },
    },
  },
  extraReducers: {
    [userLoginDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [userLoginDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.userInfo = action.payload;
    },
    [userLoginDetails.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { userLogout } = userLoginSlice.actions;

export default userLoginSlice.reducer;
