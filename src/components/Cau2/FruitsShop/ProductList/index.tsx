import React, { useEffect } from "react"
import type { RootState } from "../../../../app/store"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import ProductItem from "./ProductItem"
import Pagination from "./Pagination"
import { useNavigate, useParams } from "react-router-dom"
import { fetchCategoryBySlug } from "../../../../features/category/categorySlice"

function ProductList() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state: RootState) => state.categories.products)
  const status = useAppSelector((state: RootState) => state.categories.status)
  const error = useAppSelector((state: RootState) => state.categories.error)
  const page = useAppSelector((state: RootState) => state.categories.page)
  const limit = useAppSelector((state: RootState) => state.categories.limit)
  const total = useAppSelector((state: RootState) => state.categories.total)
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      dispatch(fetchCategoryBySlug({ slug, page, limit }))
    } else {
      navigate("/404")
    }
  }, [dispatch, page, limit, slug])

  useEffect(() => {
    if (slug) {
      if (page > 1) {
        window.history.pushState({}, "", `/category/${slug}&p=${page}`)
      } else {
        window.history.pushState({}, "", `/category/${slug}`)
      }
      return
    }
  }, [dispatch, page, limit, slug])
  useEffect(() => {
    if ((status === "succeeded") && categories.length < 1) {
      navigate("/404")
    }
  }, [dispatch, status, categories])
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">
        {error && <p className="alert alert-danger">{error}</p>}
        {status === "loading" ? (
          <p>Loading Products...</p>
        ) : (
          <>
            {categories.map((product, index) => (
              <ProductItem key={index} item={product} />
            ))}
            <Pagination total={total} page={page} limit={limit} />
          </>
        )}
      </div>
    </div>
  )
}

export default ProductList
