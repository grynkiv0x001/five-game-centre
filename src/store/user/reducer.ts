import { createSlice } from '@reduxjs/toolkit';

import { IUserState } from './interfaces';

const initialState: IUserState = {
  user: null,
};

export const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

// export const {} = userStore.actions;
export default userStore.reducer;
