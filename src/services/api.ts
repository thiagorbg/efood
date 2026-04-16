import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type { ProductItemm } from '../components/Banner/index'
import type { ProductItem } from '../pages/home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getProduct: builder.query<ProductItem, void> ({
      query: () => 'destaque'
    }),
    getProductId: builder.query<ProductItemm, string>({
      query: (id) => `/${id}`
    })
  })
})

export const {useGetProductQuery,useGetProductIdQuery} = api

export default api
