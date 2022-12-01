import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { apiSlice } from './features/apis/apiSlice'

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})
