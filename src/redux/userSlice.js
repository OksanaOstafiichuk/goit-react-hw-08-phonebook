import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  password: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.createUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.password = payload.user.password;
        state.token = payload.token;
      }
    )
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.password = payload.user.password;
      }
    );
  },
  
});



export const { getUser } = userSlice.actions;
