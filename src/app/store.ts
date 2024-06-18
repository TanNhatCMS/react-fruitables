import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../features/login/loginSlice"
import userReducer from "../features/user/userSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store
