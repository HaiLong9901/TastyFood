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
  tagTypes: ['User', 'Address'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'product/get_all_products',
    }),
    getProductById: builder.query({
      query: (productId) => `product/${productId}`,
    }),
    getUser: builder.query({
      query: (userId) => `auth/get_user/${userId}`,
      providesTags: ['User'],
    }),
    getAllDistrict: builder.query({
      query: () => 'https://vapi.vnappmob.com/api/province/district/01',
    }),
    getAllWard: builder.query({
      query: (districtId) => `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
    }),
    updateInfo: builder.mutation({
      query: (user) => ({
        url: `/auth/update/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateAddress: builder.mutation({
      query: (address) => ({
        url: '/auth/update_address',
        method: 'PUT',
        body: address,
      }),
      invalidatesTags: ['User'],
    }),
    changePassword: builder.mutation({
      query: (change) => ({
        url: 'auth/change_password',
        method: 'PUT',
        body: change,
      }),
    }),
  }),
})

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetUserQuery,
  useGetAllDistrictQuery,
  useGetAllWardQuery,
  useUpdateInfoMutation,
  useUpdateAddressMutation,
  useChangePasswordMutation,
} = apiSlice
