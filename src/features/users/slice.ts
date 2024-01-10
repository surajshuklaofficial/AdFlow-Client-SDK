import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { fetchUserInfo } from "../../app/api";
import { userInfo } from "../../app/types";

// Define a type for the slice state
interface userSlice {
  status: "idle" | "loading";
  error: any; // manage errors
  userInfo: userInfo;
}

// Define the initial state using that type
const initialState: userSlice = {
  error: "",
  status: "idle",
  userInfo: {
    email: "",
    role: "",
    firstName: "",
    lastName: "",
  },
};

export const fetchuserInfoAsync = createAsyncThunk(
  "user/fetchuserInfo",
  async (jwt_token: string | null) => {
    const response = await fetchUserInfo(jwt_token);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchuserInfoAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchuserInfoAsync.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchuserInfoAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    });
  },
});


// Other code such as selectors can use the imported `RootState` type
export const selectuserInfo = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
