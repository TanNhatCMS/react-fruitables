import React from 'react'
import Left from './Left'
import ProductList from './ProductList'

const FruitsShop: React.FC = () => {
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search" />
              </span>
                </div>
              </div>
              <div className="col-6" />
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <Left />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FruitsShop
