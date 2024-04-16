import { getFeedsApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TFeedsState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

const initialState: TFeedsState = {
  orders: [],
  total: 0,
  totalToday: 0
};

export const fetchFeeds = createAsyncThunk('feed/fetchFeeds', getFeedsApi);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {},
  selectors: {
    getFeedsOrdersSelector: (state) => state.orders,
    getFeedsSelector: (state) => state
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeeds.fulfilled, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
  }
});

export const feedsReducer = feedSlice.reducer;
export const { getFeedsOrdersSelector, getFeedsSelector } = feedSlice.selectors;
