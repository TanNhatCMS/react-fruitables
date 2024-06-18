import type React from 'react'
import { useCallback, useContext, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import { ContextModalSearch } from '../../context/ContextModalSearch'

const Search: React.FC = (props) => {
  const modalContext = useContext(ContextModalSearch)
  const { isOpenModal, setIsOpenModal } = modalContext

  const handleCloseEsc = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setIsOpenModal(false)
      }
    },
    [setIsOpenModal],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleCloseEsc)
    return () => document.removeEventListener('keydown', handleCloseEsc)
  }, [handleCloseEsc])

  const handleClose = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      {/* Modal Search Start */}
      <Modal
        {...props}
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        aria-hidden="true"
        className="modal-content rounded-0"
        fullscreen
        show={isOpenModal}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 id="contained-modal-title-vcenter">
              Search by keyword
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
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
        </Modal.Body>
      </Modal>
      {/* Modal Search End */}
    </>
  )
}

export default Search
