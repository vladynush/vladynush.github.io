import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'src/entities/auth/model/authSlice';
import profileReducer from 'src/entities/profile/model/profileSlice';
// import cartReducer from 'src/entities/cart/model/cartSlice';
// import operationsReducer from 'src/entities/product/model/operationsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    // cart: cartReducer,
    // operations: operationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
