import { newOrderReducer, postNewOrder, initialState } from '../newOrderSlice';
import { TNewOrderResponse } from '@api';

describe('Тест newOrderReducer', () => {
  const testOrder: TNewOrderResponse = {
    order: {
      _id: '1',
      ingredients: ['1', '2'],
      status: 'done',
      name: 'test',
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      number: 1
    },
    name: 'test',
    success: true
  };

  test('newOrder Request', () => {
    const state = newOrderReducer(initialState, {
      type: postNewOrder.pending.type,
      payload: testOrder
    });
    expect(state.orderRequest).toEqual(true);
    expect(state.order).toEqual(null);
    expect(state.name).toEqual('');
  });

  test('newOrder Success', () => {
    const state = newOrderReducer(initialState, {
      type: postNewOrder.fulfilled.type,
      payload: testOrder
    });
    expect(state.orderRequest).toEqual(false);
    expect(state.order).toEqual(testOrder.order);
    expect(state.name).toEqual(testOrder.name);
  });

  test('newOrder Failure', () => {
    const state = newOrderReducer(initialState, {
      type: postNewOrder.rejected.type,
      payload: testOrder
    });
    expect(state.orderRequest).toEqual(false);
    expect(state.order).toEqual(null);
    expect(state.name).toEqual('');
  });
});
