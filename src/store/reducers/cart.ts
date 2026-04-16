import { createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from "@reduxjs/toolkit"
import type { ProductItem } from '../../components/Banner'

type CartState = {
  items: ProductItem[]
  isOpen: boolean
}
const initialState:CartState = {
  items: [],
  isOpen: false
}


const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductItem>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen  = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const {add, close , open} = cartSlice.actions
export default cartSlice.reducer
