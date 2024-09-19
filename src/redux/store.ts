import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './article/articleSlice';
import productReducer from './product/productSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
