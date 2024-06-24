import React from "react"

const SinglePageHeader: React.FC = () => {

  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">Category</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <a href="/#">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/#">Page</a>
        </li>
        <li className="breadcrumb-item active text-white">Category</li>
      </ol>
    </div>
  )
}
export default SinglePageHeader
