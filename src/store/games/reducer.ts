import { createSlice } from '@reduxjs/toolkit';

import { IGamesState } from './interfaces';

const initialState: IGamesState = {
  games: [],
};

export const gamesStore = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

// export const {} = gamesStore.actions;
export default gamesStore.reducer;
