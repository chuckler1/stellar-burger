import { initialState as ingredientsInitialState } from './slices/ingredientsSlice';
import { initialState as userInitialState } from './slices/userSlice';
import { initialState as userOrdersInitialState } from './slices/userOrdersSlice';
import { initialState as constructorInitialState } from './slices/constructorSlice';
import { initialState as feedInitialState } from './slices/feedSlice';
import { initialState as newOrderInitialState } from './slices/newOrderSlice';
import { rootReducer } from './rootReducer';

const initialState = {
  ingredients: ingredientsInitialState,
  user: userInitialState,
  userOrders: userOrdersInitialState,
  constructorBurger: constructorInitialState,
  feed: feedInitialState,
  newOrder: newOrderInitialState
};

describe('Проверяем rootReducer', () => {
  test('Проверяем правильную инициализацию rootReducer', () => {
    expect(rootReducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState
    );
  });
});
