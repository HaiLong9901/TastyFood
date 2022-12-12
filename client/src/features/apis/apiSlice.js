import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API, LOCAL_STORAGE_TOKEN_NAME } from '../../shared/Constants'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token
      const token = localStorage[LOCAL_STORAGE_TOKEN_NAME]
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'product/get_all_products',
    }),
    getProductById: builder.query({
      query: (productId) => `product/${productId}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery } = apiSlice
