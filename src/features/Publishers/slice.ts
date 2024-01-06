import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  Ad,
  uploadAd,
  fetchAdsByAdvertiser,
  fetchAdvertiserInfo,
  AdvertiserInfo,
} from "../../app/api";

// Define a type for the slice state
interface AdvertiserSlice {
  ads: Ad[];
  status: "idle" | "loading";
  error: any; // TODO: manage errors
  advertiserInfo: AdvertiserInfo;
}

// Define the initial state using that type
const initialState: AdvertiserSlice = {
  ads: [],
  error: "",
  status: "idle",
  advertiserInfo: {
    email: "",
    role: "advertiser",
    firstName: "",
    lastName: "",
  },
};

export const uploadAdAsync = createAsyncThunk(
  "advertiser/uploadAd",
  async (adData: Ad) => {
    const response = await uploadAd(adData);
    return response.data;
  }
);

export const fetchAdsByAdvertiserAsync = createAsyncThunk(
  "advertiser/fetchAdsAsyncByAdvertiser",
  async (id: string | null) => {
    const response = await fetchAdsByAdvertiser(id);
    return response.data;
  }
);

export const fetchAdvertiserInfoAsync = createAsyncThunk(
  "advertiser/fetchAdvertiserInfo",
  async (jwt_token: string | null) => {
    const response = await fetchAdvertiserInfo(jwt_token);
    return response.data;
  }
);

export const advertiserSlice = createSlice({
  name: "advertiser",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(uploadAdAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(uploadAdAsync.fulfilled, (state, action) => {
      state.ads.push(action.payload);
      state.status = "idle";
    });
    builder.addCase(uploadAdAsync.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchAdsByAdvertiserAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAdsByAdvertiserAsync.fulfilled, (state, action) => {
      state.ads = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchAdsByAdvertiserAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(fetchAdvertiserInfoAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAdvertiserInfoAsync.fulfilled, (state, action) => {
      state.advertiserInfo = action.payload;
      state.status = "idle";
    });
    builder.addCase(fetchAdvertiserInfoAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectAds = (state: RootState) => state.advertiser.ads;
export const selectAdvertiserInfo = (state: RootState) => state.advertiser.advertiserInfo;


export default advertiserSlice.reducer;
