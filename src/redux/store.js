import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsApi } from './contactsApi'
import { phoneBookSlice } from './phoneBookSlice';

export const store = configureStore({
    reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    phoneBook: phoneBookSlice.reducer
  },
   middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
})

setupListeners(store.dispatch)