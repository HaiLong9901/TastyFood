import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from '../../shared/Constants'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
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
