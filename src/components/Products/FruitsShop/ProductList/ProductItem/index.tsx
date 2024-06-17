import React from 'react'

function ProductItem({ item }) {
  const defaultImage = 'https://via.placeholder.com/150'

  return (
    <div className="col-md-6 col-lg-6 col-xl-4">
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img
            src={item.thumbnail || defaultImage} // Use default image if no image provided
            className="img-fluid w-100 rounded-top"
            alt={item.name || 'Product image'} // Set alt text based on name
          />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: 10, left: 10 }}
        >
          {item.category}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{item.name}</h4>
          <p>
            {item.description && item.description.length > 50
              ? `${item.description.substring(0, 50)}...`
              : item.description}
          </p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">${item.price}</p>
            <a
              href={`/product/${item.id}`}
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary" /> Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
