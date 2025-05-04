import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
  isInited: boolean;
};

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isInited: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    syncToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    initApp: (state) => {
      state.isInited = true;
    },
  },
});

export const { initApp, login, logout, syncToken } = authSlice.actions;
export default authSlice.reducer;
