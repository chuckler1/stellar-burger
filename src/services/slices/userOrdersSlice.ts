import { getOrdersApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

export const getOrders = createAsyncThunk('orders/getOrders', getOrdersApi);

type TUserOrdersState = {
  orders: TOrder[];
};

export const initialState: TUserOrdersState = {
  orders: []
};

export const userOrdersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  }
});

export const userOrdersReducer = userOrdersSlice.reducer;
