import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../screens/Products/products.slice';
import {productsApi} from '../screens/Products/products.api';
import basketSlice from '../screens/Basket/basket.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    basket: basketSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([productsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
