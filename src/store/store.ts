import { configureStore } from '@reduxjs/toolkit';

import { postApi } from './product/product';

export const store = configureStore({
  reducer: { [postApi.reducerPath]: postApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>;
