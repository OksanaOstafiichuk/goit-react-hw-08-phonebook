import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.createUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.name = payload.user.name;
        state.token = payload.token;
      }
    );
  },
});



export const { getUser } = userSlice.actions;
