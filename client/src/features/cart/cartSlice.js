// import { createSlice } from '@reduxjs/toolkit'
// import { LOCAL_STORAGE_CART_NUMBER } from '../../shared/Constants'

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     products: [],
//     isAddItems: false,
//   },
//   reducers: {
//     setItems: (state, action) => {
//       state.products = [...action.payload?.map((product) => product._id)]
//       console.log(state.products)
//     },
//     addItems: (state, action) => {
//       if (state.products.includes(action.payload)) return
//       state.products.push(action.payload)
//     },
//     setAddItems: (state, action) => {
//       state.isAddItems = action.payload
//     },
//   },
// })

// export const { setItems, setAmount, addItems } = cartSlice.actions
// export default cartSlice.reducer
// export const selectCartAmount = (state) => state.cart.products.length
// export const getIsAddItems = (state) => state.cart.isAddItems
