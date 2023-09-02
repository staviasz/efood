import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './reducer/carrinho';

export const store = configureStore({
  reducer: {
    carrinho: cartReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
