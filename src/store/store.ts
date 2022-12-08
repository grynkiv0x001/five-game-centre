import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/reducer';
import gamesReducer from './games/reducer';

export const store = configureStore({
  reducer: {
    userReducer,
    gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
