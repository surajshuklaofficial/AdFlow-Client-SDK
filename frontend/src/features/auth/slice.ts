import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { signin, signup, UserAuthInfo } from "../../app/api";

// Define a type for the slice state
interface authState {
  token: string;
  status: "idle" | "loading";
  error: string
}

// Define the initial state using that type
const initialState: authState = {
  token: "",
  status: "idle",
  error: ""
};

export const signupAsync = createAsyncThunk(
  "auth/signup",
  async (userAuthInfo: UserAuthInfo) => {
    const response = await signup(userAuthInfo);
    return response.data;
  }
);

export const signinAsync = createAsyncThunk(
  "auth/signin",
  async (userAuthInfo: UserAuthInfo) => {
    const response = await signin(userAuthInfo);
    return response.data[0]; // temporary authentication
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state) => {
      state.token += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(signupAsync.fulfilled, (state, action) => {
      state.token = action.payload;
      state.status = "idle";
    })
    builder.addCase(signupAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(signinAsync.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(signinAsync.fulfilled, (state, action) => {
      state.token = action.payload;
      state.status = "idle";
    })
    builder.addCase(signinAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "idle";
    })
  },
});

export const { increment } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.auth.token;
export const selectError = (state: RootState) => state.auth.error;
export const selectStatus = (state: RootState) => state.auth.status;

export default authSlice.reducer;
