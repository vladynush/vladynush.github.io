import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
  name: string;
  email: string;
  isAdmin: boolean;
};

type ProfileState = Profile | null;

const initialState: ProfileState = null;

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (_state, action: PayloadAction<Profile>): ProfileState => {
      return action.payload;
    },
    clearProfile: (): ProfileState => {
      return null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
