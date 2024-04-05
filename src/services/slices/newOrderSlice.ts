import { orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

export const postNewOrder = createAsyncThunk(
  'newOrder/postNewOrder',
  async (order: string[]) => {
    const response = await orderBurgerApi(order);
    return response;
  }
);

type TNewOrderState = {
  order: null | TOrder;
  name: string;
  orderRequest: boolean;
};

const initialState: TNewOrderState = {
  order: null,
  name: '',
  orderRequest: false
};

const newOrderSlice = createSlice({
  name: 'newOrder',
  initialState,
  reducers: {
    clearOrder: (state) => (state = initialState)
  },
  selectors: {
    getNewOrderSelector: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(postNewOrder.pending, (state) => {
        state.orderRequest = true;
      })
      .addCase(postNewOrder.fulfilled, (state, action) => {
        state.order = action.payload.order;
        state.orderRequest = false;
        state.name = action.payload.name;
      })
      .addCase(postNewOrder.rejected, (state) => {
        state.orderRequest = false;
      });
  }
});

export const { clearOrder } = newOrderSlice.actions;
export const newOrderReducer = newOrderSlice.reducer;
export const { getNewOrderSelector } = newOrderSlice.selectors;
