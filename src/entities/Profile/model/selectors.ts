import { RootState } from 'src/app/store/store';

export const selectIsAdmin = (state: RootState) => state.profile?.isAdmin === true;
