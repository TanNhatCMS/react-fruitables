import React from 'react'

const SinglePageHeader: React.FC = () => (
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Products</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <a href="/index.html#">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="/#">Pages</a>
      </li>
      <li className="breadcrumb-item active text-white">Products</li>
    </ol>
  </div>
)

export default SinglePageHeader