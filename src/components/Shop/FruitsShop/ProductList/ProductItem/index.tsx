import React from 'react'


function ProductItem({type , images, name, describe, url, price }) {
  return (
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src={images}
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              {type}
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>{name}</h4>
              <p>
                {describe}
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">${price} / kg</p>
                <a
                  href={url}
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" />{' '}
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>

  )
}

export default ProductItem
