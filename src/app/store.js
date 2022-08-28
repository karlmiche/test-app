import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../reducers/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiSlice.middleware),
});
