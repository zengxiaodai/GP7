import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counter from './reducers/counter';

export const store = configureStore({
  reducer: {
    counter: counter,
  },
});

// 定义并抛出三个TS类型
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
