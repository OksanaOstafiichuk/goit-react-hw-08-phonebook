import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const initialState = {
  contacts: {
    items: [],
    filter: ''
  }
}

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState,
    reducers: {
      add: (state, action) => {
          state.contacts.items = [...state.contacts.items, action.payload]
      },
      deleteContact: (state, action) => {
          state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload)
      },
      updateFilter: (state, action) => {
          state.contacts.filter = action.payload;
      },
      renderList: (state, action) => {
          state.contacts.items = state.contacts.items.filter(contact => contact.name.toLowerCase().includes(action.payload))
      }
    },
})

const persistConfig = {
  key: 'phoneBook',
  storage,
}

export const phoneBookReducer = persistReducer(persistConfig, phoneBookSlice.reducer)

export const { add, deleteContact, updateFilter, renderList } = phoneBookSlice.actions;