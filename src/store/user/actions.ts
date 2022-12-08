import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_USER } from 'store/action-types';

export const getUser = createAsyncThunk(GET_USER, async () => {});
