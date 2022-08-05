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
        addContact: (state, action) => {},
        deleteContact: (state, action) => {},
        updateFilter: (state, action) =>{},
    },
})

export const { addContact, deleteContact, updateFilter } = phoneBookSlice.actions;