import type React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './assets/scss/bootstrap.scss'
import './fontawesome'
import './App.css'
import Home from './components/Home'
import NoPage from './components/Page/NoPage'
import Head from './components/Head'
import Shop from './components/Shop'
import Contact from './components/Contact'
import ShopDetail from './components/ShopDetail'
import Cart from './components/Page/Cart'
import Checkout from './components/Page/Checkout'
import Testimonial from './components/Page/Testimonial'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import store from './app/store'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/index.html"
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
          path="/shop.html"
          element={(
            <>
              <Head title="Shop | Fruitables - Vegetable Website Template" />
              <Shop />
            </>
          )}
        />
        <Route
          path="/shop-detail.html"
          element={(
            <>
              <Head title="Shop Detail| Fruitables - Vegetable Website Template" />
              <ShopDetail />
            </>
          )}
        />
        <Route
          path="/contact.html"
          element={(
            <>
              <Head title="Contact| Fruitables - Vegetable Website Template" />
              <Contact />
            </>
          )}
        />
        <Route
          path="/testimonial.html"
          element={(
            <>
              <Head title="Testimonial | Fruitables - Vegetable Website Template" />
              <Testimonial />
            </>
          )}
        />
        <Route
          path="/cart.html"
          element={(
            <>
              <Head title="Cart| Fruitables - Vegetable Website Template" />
              <Cart />
            </>
          )}
        />
        <Route
          path="/checkout.html"
          element={(
            <>
              <Head title="Checkout | Fruitables - Vegetable Website Template" />
              <Checkout />
            </>
          )}
        />
        <Route
          path="/404.html"
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
        <Route path="/" element={<Navigate to="/index.html" />} />
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// @ts-ignore
export default App;
