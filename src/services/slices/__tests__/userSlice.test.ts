import {
  userReducer,
  initialState,
  register,
  login,
  logout,
  getUser,
  updateUser
} from '../userSlice';
import { TUser } from '@utils-types';

describe('Тест userReducer', () => {
  const testUser: TUser = {
    name: 'name',
    email: 'email'
  };
  const messageError = 'error';

  test('register Request', () => {
    const state = userReducer(initialState, {
      type: register.pending.type
    });
    expect(state.error).toEqual(null);
  });

  test('register Success', () => {
    const state = userReducer(initialState, {
      type: register.fulfilled.type,
      payload: {
        user: testUser
      }
    });
    expect(state.user).toEqual(testUser);
  });

  test('register Failure', () => {
    const state = userReducer(initialState, {
      type: register.rejected.type,
      error: {
        message: messageError
      }
    });
    expect(state.error).toEqual(messageError);
  });

  test('login Request', () => {
    const state = userReducer(initialState, {
      type: login.pending.type
    });
    expect(state.error).toEqual(null);
    expect(state.isAuthChecked).toEqual(false);
  });

  test('login Success', () => {
    const state = userReducer(initialState, {
      type: login.fulfilled.type,
      payload: {
        user: testUser
      }
    });
    expect(state.user).toEqual(testUser);
    expect(state.isAuthChecked).toEqual(true);
  });

  test('login Failure', () => {
    const state = userReducer(initialState, {
      type: login.rejected.type,
      error: {
        message: messageError
      }
    });
    expect(state.error).toEqual(messageError);
  });

  test('logout', () => {
    const state = userReducer(initialState, {
      type: logout.fulfilled.type
    });
    expect(state).toEqual(initialState);
  });

  test('getUser Request', () => {
    const state = userReducer(initialState, {
      type: getUser.pending.type
    });
    expect(state.error).toEqual(null);
    expect(state.isAuthChecked).toEqual(false);
  });

  test('getUser Success', () => {
    const state = userReducer(initialState, {
      type: getUser.fulfilled.type,
      payload: {
        user: testUser
      }
    });
    expect(state.user).toEqual(testUser);
    expect(state.isAuthChecked).toEqual(true);
  });

  test('getUser Failure', () => {
    const state = userReducer(initialState, {
      type: getUser.rejected.type,
      error: {
        message: messageError
      }
    });
    expect(state.error).toEqual(messageError);
  });

  test('updateUser Request', () => {
    const state = userReducer(initialState, {
      type: updateUser.pending.type
    });
    expect(state.error).toEqual(null);
  });

  test('updateUser Success', () => {
    const state = userReducer(initialState, {
      type: updateUser.fulfilled.type,
      payload: {
        user: testUser
      }
    });
    expect(state.user).toEqual(testUser);
  });

  test('updateUser Failure', () => {
    const state = userReducer(initialState, {
      type: updateUser.rejected.type,
      error: {
        message: messageError
      }
    });
    expect(state.error).toEqual(messageError);
  });
});
