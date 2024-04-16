import { combineReducers } from '@reduxjs/toolkit';
import { ingredientsReducer } from './slices/ingredientsSlice';
import { constructorReducer } from './slices/constructorSlice';
import { feedsReducer } from './slices/feedSlice';
import { userReducer } from './slices/userSlice';
import { userOrdersReducer } from './slices/userOrdersSlice';
import { newOrderReducer } from './slices/newOrderSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructorBurger: constructorReducer,
  feed: feedsReducer,
  user: userReducer,
  userOrders: userOrdersReducer,
  newOrder: newOrderReducer
});
