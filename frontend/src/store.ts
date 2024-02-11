import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './api';

export default configureStore({
  devTools: import.meta.env.MODE !== 'production',
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([searchApi.middleware]),
});
