import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/Auth/auth.slice';

// create a store
export const store = configureStore({
    reducer: {
        auth: AuthReducer
    },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;