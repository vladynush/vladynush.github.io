import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/entities/Auth/model/authSlice';
import profileReducer from 'src/entities/Profile/model/profileSlice';
import operationsReducer from 'src/entities/Operation/model/operationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    operations: operationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
