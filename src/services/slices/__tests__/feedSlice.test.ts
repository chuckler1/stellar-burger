import { feedsReducer, fetchFeeds, initialState } from '../feedSlice';
import { TOrder } from '@utils-types';

describe('Тест feedsReducer', () => {
  const testOrders = {
    orders: [
      {
        _id: '1',
        ingredients: ['1', '2'],
        status: 'done',
        name: 'name',
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        number: 1
      }
    ] as TOrder[],
    total: 1,
    totalToday: 1
  };

  test('feeds Success', () => {
    const state = feedsReducer(initialState, {
      type: fetchFeeds.fulfilled.type,
      payload: testOrders
    });
    expect(state).toEqual(testOrders);
  });
});
