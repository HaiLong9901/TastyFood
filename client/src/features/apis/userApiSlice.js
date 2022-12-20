import { apiSlice } from './apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateInfo: builder.mutation({
      query: (user) => ({
        url: `/auth/update/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
  }),
})

export const { useUpdateInfoMutation } = userApiSlice
