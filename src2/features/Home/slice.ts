import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface homeState {
  value: number;
}

// Define the initial state using that type
const initialState: homeState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
