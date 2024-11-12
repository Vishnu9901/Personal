// store.ts
import { configureStore } from '@reduxjs/toolkit';
import ModalSlice from './services/slices/ModalSlice';
import PageDataSlice from './services/slices/PageDataSlice'
export const store = configureStore({
  reducer: {
    modal: ModalSlice,
    PageData: PageDataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
