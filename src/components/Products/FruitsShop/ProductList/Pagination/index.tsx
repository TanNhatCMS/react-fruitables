import React from "react"
import { setPage } from "../../../../../features/products/productSlice"
import { useAppDispatch } from "../../../../../app/hooks"

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, page, limit }) => {
  const totalPages = Math.max(1, Math.ceil(total / (limit || 1)))
  const dispatch = useAppDispatch()
  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage))
  }
  const handlePrevPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (page > 1) handlePageChange(page - 1)
  }

  const handleNextPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (page < totalPages) handlePageChange(page + 1)
  }

  const handleFirstPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    handlePageChange(1)
  }

  const handleLastPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    handlePageChange(totalPages)
  }

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, newPage: number) => {
    e.preventDefault()
    if (newPage !== page) handlePageChange(newPage)
  }

  const renderPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 2 // Number of pages to show on either side of the current page

    const createPageElement = (pageNumber: number) => (
      <a
        key={pageNumber}
        href="/#"
        className={`rounded ${page === pageNumber ? "active" : ""}`}
        onClick={(e) => handlePageClick(e, pageNumber)}
      >
        {pageNumber}
      </a>
    )

    if (page > 1) {
      pages.push(
        <a key="first" href="/#" className="rounded" onClick={handleFirstPage}>
          « First
        </a>
      )
    }

    if (page > 1) {
      pages.push(
        <a key="prev" href="/#" className="rounded" onClick={handlePrevPage}>
          « Prev
        </a>
      )
    }

    pages.push(createPageElement(1))

    if (page > maxPagesToShow + 2) {
      pages.push(<span key="start-ellipsis">...</span>)
    }

    for (let i = Math.max(2, page - maxPagesToShow); i <= Math.min(totalPages - 1, page + maxPagesToShow); i++) {
      pages.push(createPageElement(i))
    }

    if (page < totalPages - maxPagesToShow - 1) {
      pages.push(<span key="end-ellipsis">...</span>)
    }

    if (totalPages > 1) {
      pages.push(createPageElement(totalPages))
    }

    if (page < totalPages) {
      pages.push(
        <a key="next" href="/#" className="rounded" onClick={handleNextPage}>
          Next »
        </a>
      )
    }

    if (page < totalPages) {
      pages.push(
        <a key="last" href="/#" className="rounded" onClick={handleLastPage}>
          Last »
        </a>
      )
    }

    return pages
  }

  return (
    total > 6 ?
      <div className="col-12">
        <div className="pagination d-flex justify-content-center mt-5">
          {renderPageNumbers()}
        </div>
      </div> : null
  )
}

export default Pagination
