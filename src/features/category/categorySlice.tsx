import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export type Product = {
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
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type ProductState = {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  total: number;
  page: number;
  limit: number;
  error: string | undefined;
};
const params = new URLSearchParams(window.location.search)
const p = params.get("p")
const page = p ? parseInt(p) : 1
const initialState: ProductState = {
  products: [],
  status: "idle",
  total: 0,
  page: page,
  limit: 6,
  error: undefined
}
type Category = {
  slug: string;
  name: string;
  url: string;
};

export const fetchFindCategoryBySlug = createAsyncThunk(
  "category/fetchFindCategoryBySlug",
  async (slug: string) => {
    const response = await fetchCategories()
    return response.find(item => item.slug) || undefined
  }
)

const fetchCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories")
  return response.data as Category[]
}

export const fetchCategoryBySlug = createAsyncThunk(
  "category/fetchCategoryBySlug",
  async ({ slug, page = 1, limit = 6 }: { slug: string, page?: number; limit?: number }) => {
    const response = await axios.get(`https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${((page - 1) * limit)}`)
    console.log(`https://dummyjson.com/products/category/${slug}?limit=${limit}&skip=${((page - 1) * limit)}`)
    return {
      products: response.data.products as Product[],
      total: response.data.total as number,
      page,
      limit: response.data.limit
    }
  }
)


const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryBySlug.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCategoryBySlug.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload.products
        state.total = action.payload.total
        state.page = action.payload.page
        state.limit = action.payload.limit
      })
      .addCase(fetchCategoryBySlug.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Something went wrong"
      })

  }
})
export const { setPage } = categorySlice.actions
export default categorySlice.reducer
