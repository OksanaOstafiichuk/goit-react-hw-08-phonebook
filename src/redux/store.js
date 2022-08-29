import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
persistReducer,

  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { authApi } from './authApi';
import { contactsApi } from './contactsApi'
import { phoneBookSlice } from './phoneBookSlice';
import { userSlice } from './userSlice';

const persistConfig = {
    key: 'user',
    storage,
   whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    phoneBook: phoneBookSlice.reducer,
    user: persistReducer(persistConfig, userSlice.reducer),
  },
   middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    authApi.middleware,
  ],
})

setupListeners(store.dispatch)
export const persistor = persistStore(store)