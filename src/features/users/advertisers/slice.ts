import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";
import {
  uploadAd,
  fetchAdsByAdvertiser,
  deleteAd,
  fetchAd,
  updateAd,
} from "../../../app/api";
import { Ad } from "../../../app/types";

// Define a type for the slice state
interface AdvertiserSlice {
  ads: Ad[];
  status: "idle" | "loading";
  error: any; // manage errors
  ad?: Ad;
}

// Define the initial state using that type
const initialState: AdvertiserSlice = {
  ads: [],
  error: "",
  status: "idle",
};

export const uploadAdAsync = createAsyncThunk<Ad, Ad>(
  "advertiser/uploadAd",
  async (adData: Ad) => {
    const response = await uploadAd(adData);
    return response.data;
  }
);

export const fetchAdsByAdvertiserAsync = createAsyncThunk<Ad[], string | null>(
  "advertiser/fetchAdsAsyncByAdvertiser",
  async (id: string | null): Promise<Ad[]> => {
    try {
      const response = await fetchAdsByAdvertiser(id);
      return response.data;
    } catch (error) {
      // Handle errors gracefully, you might want to throw a custom error
      console.error("Error fetching ads:", error);
      throw new Error("Failed to fetch ads.");
    }
  }
);

export const fetchAdAsync = createAsyncThunk(
  "advertiser/fetchAdAsync",
  async (id: string) => {
    const response = await fetchAd(id);
    return response.data;
  }
);

export const deleteAdAsync = createAsyncThunk(
  "advertiser/deleteAdAsync",
  async (id: string | undefined) => {
    const response = await deleteAd(id);
    return response.data;
  }
);

export const updateAdAsync = createAsyncThunk(
  "advertiser/updateAdAsync",
  async (adData: Ad) => {
    console.log(adData.id);
    const response = await updateAd(adData);
    return response.data;
  }
);

export const advertiserSlice = createSlice({
  name: "advertiser",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    removeAd: (state) => {
      delete state.ad;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadAdAsync.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(uploadAdAsync.fulfilled, (state, action) => {
      state.ads.push(action.payload);
      state.status = "idle";
    })
    builder.addCase(uploadAdAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(fetchAdAsync.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(fetchAdAsync.fulfilled, (state, action) => {
      state.ad = action.payload;
      state.status = "idle";
    })
    builder.addCase(fetchAdAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(fetchAdsByAdvertiserAsync.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(fetchAdsByAdvertiserAsync.fulfilled, (state, action) => {
      state.ads = action.payload;
      state.status = "idle";
    })
    builder.addCase(fetchAdsByAdvertiserAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    })
    builder.addCase(deleteAdAsync.pending, (state) => {
      state.status = "loading";
    })
    builder.addCase(deleteAdAsync.fulfilled, (state, action) => {
      // state.ads.findIndex(ad => ad.id === action.payload.id);
      console.log(
        action.payload,
        state.ads.filter((ad) => ad.id !== action.payload.id)
      );
      state.ads = state.ads.filter((ad) => ad.id !== action.payload.id);
      state.status = "idle";
    })
    builder.addCase(deleteAdAsync.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = "idle";
    });
  },
});

export const { removeAd } = advertiserSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAds = (state: RootState) => state.advertiser.ads;
export const selectAd = (state: RootState) => state.advertiser.ad;

export default advertiserSlice.reducer;
