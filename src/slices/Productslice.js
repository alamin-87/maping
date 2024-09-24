import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null,
  },
  reducers: {
    
    productData: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { productData } = counterSlice.actions

export default counterSlice.reducer