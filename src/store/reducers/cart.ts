import { createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from "@reduxjs/toolkit"
import type { CardapioItem } from '../../models/index'

type CartState = {
  isOpen: boolean
  pratos: CardapioItem[]
}
const initialState:CartState = {
  isOpen: false,
  pratos: []
}


const cartSlice = createSlice ({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const game = state.pratos.find((item)=> item.id === action.payload.id)

      if (!game) {
        state.pratos.push(action.payload)
      } else {
        alert('o producto ja foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.pratos = state.pratos.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen  = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const {add, close , open, remove} = cartSlice.actions
export default cartSlice.reducer
