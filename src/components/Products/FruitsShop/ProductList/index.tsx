import React, { useEffect } from "react"
import type { RootState } from "../../../../app/store"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import ProductItem from "./ProductItem"
import Pagination from "./Pagination"
import { fetchProduct } from "../../../../features/products/productSlice"

function ProductList() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state: RootState) => state.products.products)
  const status = useAppSelector((state: RootState) => state.products.status)
  const error = useAppSelector((state: RootState) => state.products.error)
  const page = useAppSelector((state: RootState) => state.products.page)
  const limit = useAppSelector((state: RootState) => state.products.limit)
  const total = useAppSelector((state: RootState) => state.products.total)

  useEffect(() => {
    dispatch(fetchProduct({ page, limit }))
  }, [dispatch, page, limit])

  const handlePageChange = (newPage: number) => {
    dispatch(fetchProduct({ page: newPage, limit }))
  }

  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">
        {error && <p className="alert alert-danger">{error}</p>}
        {status === "loading" ? (
          <p>Loading products...</p>
        ) : (
          products.map((product, index) => (
            <ProductItem key={index} item={product} />
          ))
        )}
        <Pagination total={total} page={page} limit={limit} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}

export default ProductList
