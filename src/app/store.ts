import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice";
import advertiserSlice from "../features/users/advertisers/slice";
import userSlice from "../features/users/slice";
import publisherSlice from "../features/users/publishers/slice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    advertiser: advertiserSlice,
    publisher: publisherSlice,
    user: userSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;
