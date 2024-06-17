import React from 'react'

function ProductItem({ item }) {
  return (
    <div className="border border-primary rounded position-relative vesitable-item">
      <div className="vesitable-img">
        <img src={item.image} className="img-fluid w-100 rounded-top" alt={item.name} />
      </div>
      <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: 10, right: 10 }}>
        {item.type}
      </div>
      <div className="p-4 pb-0 rounded-bottom">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <div className="d-flex justify-content-between flex-lg-wrap">
          <p className="text-dark fs-5 fw-bold">${item.price} / kg</p>
          <a href={item.url} className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary">
            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
