import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchProductById, Product } from "../products/productSlice"
import vegetableitem3 from "../../assets/images/vegetable-item-3.png"
import vegetableitem5 from "../../assets/images/vegetable-item-5.jpg"
import vegetableitem2 from "../../assets/images/vegetable-item-2.jpg"

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface CartState {
  items: CartItem[];
  shipping: number;
}

const initialState: CartState = {
  items: [
    { id: 1, name: "Big Banana", price: 2.99, quantity: 1, img: vegetableitem3 },
    { id: 2, name: "Potatoes", price: 2.99, quantity: 1, img: vegetableitem5 },
    { id: 3, name: "Awesome Broccoli", price: 2.99, quantity: 1, img: vegetableitem2 }
  ],
  shipping: 3.00
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    addItem: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        const { id, name, price, img } = action.payload
        const itemExists = state.items.find(item => item.id === id)
        if (itemExists) {
          itemExists.quantity += 1
        } else {
          state.items.push({ id, name, price, quantity: 1, img })
        }
      },
      // Prepare to fetch product details first
      prepare: async (productId: number, dispatch) => {
        try {
          const product: Product = await dispatch(fetchProductById(productId.toString()))
          return {
            payload: {
              id: product.id,
              name: product.title,
              price: product.price,
              img: product.thumbnail
            }
          }
        } catch (error) {
          // Handle errors if necessary
          console.error("Error fetching product:", error)
          throw error // Rethrow to propagate the error
        }
      }
    }
  }
})

export const { incrementQuantity, decrementQuantity, removeItem, addItem } = cartSlice.actions

export default cartSlice.reducer
