import {
  ingredientsReducer,
  initialState,
  fetchIngredients
} from '../ingredientsSlice';
import { TIngredient } from '@utils-types';

describe('Проверяем ingredientsReducer', () => {
  const testIngredients: TIngredient[] = [
    {
      _id: '1',
      name: 'Соус',
      type: 'sauce',
      proteins: 100,
      fat: 100,
      carbohydrates: 100,
      calories: 100,
      price: 100,
      image: 'image',
      image_mobile: 'image',
      image_large: 'image'
    }
  ];

  test('ingredients Request', () => {
    const state = ingredientsReducer(initialState, {
      type: fetchIngredients.pending.type,
      payload: testIngredients
    });
    expect(state.isLoading).toEqual(true);
    expect(state.ingredients).toEqual([]);
  });

  test('ingredients Success', () => {
    const state = ingredientsReducer(initialState, {
      type: fetchIngredients.fulfilled.type,
      payload: testIngredients
    });
    expect(state.isLoading).toEqual(false);
    expect(state.ingredients).toEqual(testIngredients);
  });

  test('ingredients Failure', () => {
    const state = ingredientsReducer(initialState, {
      type: fetchIngredients.rejected.type
    });
    expect(state.isLoading).toEqual(false);
    expect(state.ingredients).toEqual([]);
  });
});
