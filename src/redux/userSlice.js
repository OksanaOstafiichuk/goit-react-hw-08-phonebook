import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  password: '',
  email: '',
  token: '',
  isLoggedIn: false,
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
        state.isLoggedIn = true;
      }
    )
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        state.email = payload.user.email;
        state.password = payload.user.password;
        state.isLoggedIn = true;
      }
    );
  },
  
});



export const { getUser } = userSlice.actions;
