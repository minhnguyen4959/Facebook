import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
// Import các reducer khác

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Thêm các reducer khác vào đây
  },
}) 