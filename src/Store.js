import { configureStore } from '@reduxjs/toolkit'
import Productslice from './slices/Productslice'

export default configureStore({
  reducer: {
    counter: Productslice,
  },
})