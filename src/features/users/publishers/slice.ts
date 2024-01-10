import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";
import {
  addWebsite,
  getWebsiteByUser,
} from "../../../app/api";
import { Website } from "../../../app/types";

// Define a type for the slice state
interface publisherSlice {
  websites: Website[];
  status: "idle" | "loading";
  error: any;
}

// Define the initial state using that type
const initialState: publisherSlice = {
  websites: [],
  error: "",
  status: "idle"
};

export const addWebsiteAsync = createAsyncThunk(
  "publisher/addWebsite",
  async (websiteData: Website) => {
    const response = await addWebsite(websiteData);
    return response.data;
  }
);

export const getWebsiteAsync = createAsyncThunk(
  "publisher/getWebsite",
  async (user: string | null) => {
    const response = await getWebsiteByUser(user);
    return response.data;
  }
);

export const publisherSlice = createSlice({
  name: "publisher",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getWebsiteAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getWebsiteAsync.fulfilled, (state, action) => {
      state.websites = [ ...action.payload];
      state.status = "idle";
    });
    builder.addCase(getWebsiteAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(addWebsiteAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addWebsiteAsync.fulfilled, (state, action) => {
      state.websites.push(action.payload);
      state.status = "idle";
    });
    builder.addCase(addWebsiteAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "idle";
    });
  },
});


// Other code such as selectors can use the imported `RootState` type
export const selectWebsites = (state: RootState) => state.publisher.websites;

export default publisherSlice.reducer;
