import { configureStore } from '@reduxjs/toolkit';

import account from './slices/account';
import settings from './slices/settings';

const store = configureStore({
  reducer: {
    account,
    settings
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
