import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from './features/apis/apiSlice'
import authReducer from './features/auth/authSlice'

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})
