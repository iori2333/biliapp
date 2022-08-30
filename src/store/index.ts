import { configureStore } from '@reduxjs/toolkit';

import account from './slices/account';
import settings from './slices/settings';
import playlist from './slices/playlist';

const store = configureStore({
  reducer: {
    account,
    settings,
    playlist
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
