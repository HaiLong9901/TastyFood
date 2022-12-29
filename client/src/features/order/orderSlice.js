import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    products: [],
    amount: 0,
  },
  reducers: {
    addToOrder: (state, action) => {
      const { productId, quantity, sale_price } = action.payload
      const index = state.products.findIndex((product) => product.productId === productId)
      if (index > -1) state.products[index].quantity = quantity
      else
        state.products.push({
          productId,
          quantity,
          sale_price,
        })
    },
    removeFromOrder: (state, action) => {
      const { productId } = action.payload
      state.products = [...state.products.filter((product) => product.productId !== productId)]
    },
  },
})

export const { addToOrder, removeFromOrder } = orderSlice.actions
export default orderSlice.reducer
export const selectProductsFromOrder = (state) => state.order.products
export const selectAmountOfOrder = (state) => {
  const amount = state.order.products.reduce(
    (total, product) => total + parseInt(product.quantity * product.sale_price),
    0,
  )
  return amount
}
