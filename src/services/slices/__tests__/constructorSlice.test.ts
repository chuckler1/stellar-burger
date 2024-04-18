import {
  constructorReducer,
  initialState,
  TConstructorState,
  addItem,
  clearAll,
  removeItem
} from '../constructorSlice';

describe('Тест constructorReducer', () => {
  const testState: TConstructorState = {
    constructorItems: {
      bun: null,
      ingredients: [
        {
          _id: '1',
          name: 'test',
          type: 'test',
          proteins: 1,
          fat: 1,
          carbohydrates: 1,
          calories: 1,
          price: 1,
          image: 'test',
          image_mobile: 'test',
          image_large: 'test',
          id: '1'
        }
      ]
    }
  }

  test('Тест addItem', () => {
    const action = addItem({
      _id: '1',
      name: 'test',
      type: 'test',
      proteins: 1,
      fat: 1,
      carbohydrates: 1,
      calories: 1,
      price: 1,
      image: 'test',
      image_mobile: 'test',
      image_large: 'test',
      id: '1'
    });

    const state = constructorReducer(initialState, action);
    expect(state.constructorItems.ingredients.length).toBe(1);
  })

  test('Тест clearAll', () => {
    const state = constructorReducer(testState, clearAll());
    expect(state.constructorItems.ingredients.length).toBe(0);
  })

  test('Тест removeItem', () => {
    const action = removeItem('1');
    const state = constructorReducer(testState, action);
    expect(state.constructorItems.ingredients.length).toBe(0);
  })
})
