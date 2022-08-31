import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);
      // headers.unset('Authorization', '');
      return headers;
    },
  }),

  tagTypes: ['User'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query(body) {
        return {
          url: 'signup',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),
      
    loginUser: builder.mutation({
      query(body) {
        return {
          url: 'login',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['User'],
    }),

   logoutUser: builder.mutation({
      query() {
        return {
          url: 'logout',
          method: 'POST',
        };
      },
      invalidatesTags: ['User'],
   }),
   
    currentUser: builder.query({
      query: () => 'current',
      providesTags: ['User'],
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation, useCurrentUserQuery } = authApi;
