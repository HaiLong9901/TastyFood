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
  tagTypes: ['User', 'Address', 'Cart', 'Order', 'Voucher'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'product/get_all_products',
    }),
    getProductById: builder.query({
      query: (productId) => `product/${productId}`,
    }),
    getUser: builder.query({
      query: (userId) => 'auth/get_user',
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
        url: '/auth/update',
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
    deleteAddress: builder.mutation({
      query: (index) => ({
        url: '/auth/delete_address',
        method: 'PUT',
        body: index,
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
    getCart: builder.query({
      query: () => '/cart/get_cart',
      providesTags: ['Cart'],
    }),
    addToCart: builder.mutation({
      query: (item) => ({
        url: '/cart/add_to_cart',
        method: 'PUT',
        body: item,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeItemFromCart: builder.mutation({
      query: ({ products }) => ({
        url: '/cart/remove_item',
        method: 'PUT',
        body: { products },
      }),
      invalidatesTags: ['Cart'],
    }),

    createOrder: builder.mutation({
      query: (order) => ({
        url: '/order/create_order',
        method: 'POST',
        body: order,
      }),
      invalidatesTags: ['Order'],
    }),

    getAllOrder: builder.query({
      query: (status) => `/order/get_all/${status}`,
      providesTags: ['Order'],
    }),

    updateOrderStatus: builder.mutation({
      query: (updateOrder) => ({
        url: '/order/update_status',
        method: 'PUT',
        body: updateOrder,
      }),
      invalidatesTags: ['Order'],
    }),

    getAllVoucher: builder.query({
      query: () => '/voucher/get_all',
      providesTags: ['Voucher'],
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
  useDeleteAddressMutation,
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveItemFromCartMutation,
  useCreateOrderMutation,
  useGetAllOrderQuery,
  useUpdateOrderStatusMutation,
  useGetAllVoucherQuery,
} = apiSlice
