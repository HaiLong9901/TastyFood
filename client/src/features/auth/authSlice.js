import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_NAME } from '../../shared/Constants'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    isAdmin: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, isAdmin } = action.payload
      console.log(action.payload)
      state.user = user
      state.token = accessToken
      state.isAdmin = isAdmin
      localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, accessToken)
    },
    logOut: (state, action) => {
      state.user = {}
      state.token = null
      state.isAdmin = false
      localStorage.clear()
    },
  },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentRole = (state) => state.auth.isAdmin
