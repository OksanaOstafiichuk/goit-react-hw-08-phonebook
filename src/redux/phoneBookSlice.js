import { createSlice } from '@reduxjs/toolkit'

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
    },
})

export const { add, deleteContact, updateFilter } = phoneBookSlice.actions;