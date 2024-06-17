import React, { useState, useEffect } from 'react'

import ProductItem from './ProductItem'
import Pagination from './Pagination'

function ProductList() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setIsLoading(false)
      })
      .catch(error => console.error(error))
  }, [])
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">

        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product, index) => (
            <ProductItem key={index} item={product} />
          ))
        )}
        <Pagination />
      </div>
    </div>
  )
}

export default ProductList
