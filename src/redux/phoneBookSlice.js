import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filter: ''
}

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState,
    reducers: {
      updateFilter: (state, action) => {
          state.filter = action.payload;
      },
    },
})

export const { updateFilter } = phoneBookSlice.actions;