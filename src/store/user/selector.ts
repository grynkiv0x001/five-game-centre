import { RootState } from 'store/store';

export const selectorGetUser = (state: RootState) => state.userReducer.user;
