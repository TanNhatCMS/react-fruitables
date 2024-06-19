import type React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./assets/scss/bootstrap.scss"
import "./fontawesome"
import "./App.css"
import Home from "./components/Home"
import NoPage from "./components/Page/NoPage"
import Head from "./components/Head"
import Shop from "./components/Shop"
import Contact from "./components/Contact"
import ShopDetail from "./components/ShopDetail"
import Cart from "./components/Page/Cart"
import Checkout from "./components/Page/Checkout"
import Testimonial from "./components/Page/Testimonial"
import Products from "./components/Products"
import ProductDetail from "./components/ProductDetail"
import store from "./app/store"
import { Provider } from "react-redux"
import LoginForm from "./components/LoginForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Profile from "./components/Profile"

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Head title="Home | Fruitables - Vegetable Website Template " />
              <Home />
            </>
          )}
        />
        <Route
          path="/products"
          element={(
            <>
              <Head title="Products | Fruitables - Vegetable Website Template" />
              <Products />
            </>
          )}
        />
        <Route
          path="/product/:id"
          element={(
            <>
              <Head title="Product Detail| Fruitables - Vegetable Website Template" />
              <ProductDetail />
            </>
          )}
        />
        <Route
          path="/shop"
          element={(
            <>
              <Head title="Shop | Fruitables - Vegetable Website Template" />
              <Shop />
            </>
          )}
        />
        <Route
          path="/shop-detail"
          element={(
            <>
              <Head title="Shop Detail| Fruitables - Vegetable Website Template" />
              <ShopDetail />
            </>
          )}
        />
        <Route
          path="/contact"
          element={(
            <>
              <Head title="Contact| Fruitables - Vegetable Website Template" />
              <Contact />
            </>
          )}
        />
        <Route
          path="/testimonial"
          element={(
            <>
              <Head title="Testimonial | Fruitables - Vegetable Website Template" />
              <Testimonial />
            </>
          )}
        />
        <Route
          path="/cart"
          element={(
            <>
              <Head title="Cart| Fruitables - Vegetable Website Template" />
              <Cart />
            </>
          )}
        />
        <Route
          path="/checkout"
          element={(
            <>
              <Head title="Checkout | Fruitables - Vegetable Website Template" />
              <Checkout />
            </>
          )}
        />
        <Route
          path="/404"
          element={(
            <>
              <Head title="404 | Page not found" />
              <NoPage />
            </>
          )}
        />
        <Route
          path="/:title-:id.html"
          element={(
            <>
              <Head title="Shop Detail| Fruitables - Vegetable Website Template" />
              <ShopDetail />
            </>
          )}
        />
        <Route
          path=":id"
          element={(
            <>
              <Head title="Shop | Fruitables - Vegetable Website Template" />
              <Shop />
            </>
          )}
        />
        <Route
          path="/login"
          element={
            <>
              <Head title="Login" />
              <Header />
              <LoginForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Head title="Profile " />
              <Header />
              <Profile />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// @ts-ignore
export default App
