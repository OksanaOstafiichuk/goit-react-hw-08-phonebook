import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: {
    filter: ''
  }
}

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState,
    reducers: {
      updateFilter: (state, action) => {
          state.contacts.filter = action.payload;
      },
    },
})

export const { updateFilter } = phoneBookSlice.actions;