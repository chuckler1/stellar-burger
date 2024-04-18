import { userOrdersReducer, initialState, getOrders } from '../userOrdersSlice';
import { TOrder } from '@utils-types';

describe('Тест userOrdersReducer', () => {
  const testOrder: TOrder[] = [
    {
      _id: '1',
      ingredients: ['1', '2'],
      status: 'done',
      name: 'name',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      number: 1
    }
  ];

  test('getOrders Success', () => {
    const state = userOrdersReducer(initialState, {
      type: getOrders.fulfilled.type,
      payload: testOrder
    });
    expect(state.orders).toEqual(testOrder);
  });
});
