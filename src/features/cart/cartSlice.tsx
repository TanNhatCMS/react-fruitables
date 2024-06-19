import { createSlice, PayloadAction, createAsyncThunk, unwrapResult } from "@reduxjs/toolkit"
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
  totalQuantity: number;
}

const initialState: CartState = {
  items: [
    { id: 1000, name: "Big Banana", price: 2.99, quantity: 1, img: vegetableitem3 },
    { id: 2000, name: "Potatoes", price: 2.99, quantity: 1, img: vegetableitem5 },
    { id: 3000, name: "Awesome Broccoli", price: 2.99, quantity: 1, img: vegetableitem2 }
  ],
  shipping: 3.00,
  totalQuantity: 3
}

export const fetchProductAndAdd = createAsyncThunk(
  "cart/fetchProductAndAdd",
  async (productId: number, { dispatch }) => {
    try {
      const productAction = await dispatch(fetchProductById(productId.toString()))
      const product: Product = unwrapResult(productAction)
      return {
        id: product.id,
        name: product.title,
        price: product.price,
        img: product.thumbnail,
        quantity: 1
      }
    } catch (error) {
      console.error("Error fetching product:", error)
      throw error
    }
  }
)

export const addProductById = createAsyncThunk(
  "cart/addProductById",
  async (id: number, { dispatch }) => {
    try {
      await dispatch(fetchProductAndAdd(id))
    } catch (error) {
      console.error("Error adding product:", error)
      throw error
    }
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity += 1
        state.totalQuantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        state.totalQuantity -= item.quantity
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductAndAdd.fulfilled, (state, action: PayloadAction<CartItem>) => {
      const { id, name, price, img, quantity } = action.payload
      const itemExists = state.items.find(item => item.id === id)
      if (itemExists) {
        itemExists.quantity += quantity
        state.totalQuantity += quantity
      } else {
        state.items.push({ id, name, price, quantity, img })
        state.totalQuantity += quantity
      }
    })
  }
})

export const { incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer
