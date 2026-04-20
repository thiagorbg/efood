import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type  {  ProductItem} from '../models/index'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<ProductItem[], void> ({
      query: () => 'restaurantes'
    }),
    getProductId: builder.query<ProductItem, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {useGetProductQuery,useGetProductIdQuery} = api

export default api
