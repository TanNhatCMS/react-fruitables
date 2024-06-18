import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}


interface ProductState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  total: number;
  page: number;
  limit: number;
  skip: number;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  status: "idle",
  total: 0,
  page: 1,
  limit: 6,
  skip: 0,
  error: null
}

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async ({ page = 1, limit = 9 }: { page?: number; limit?: number }) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
    return {
      products: response.data.products as Product[],
      total: response.data.total as number,
      page,
      limit,
      skip: (page - 1) * limit
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload.products
        state.total = action.payload.total
        state.page = action.payload.page
        state.limit = action.payload.limit
        state.skip = action.payload.skip
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong"
      })
  }
})

export default productSlice.reducer
