import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../features/login/loginSlice"
import userReducer from "../features/user/userSlice"
import productReducer from "../features/products/productSlice"
import cartReducer from "../features/cart/cartSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    products: productReducer,
    user: userReducer
  },
  devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store
