import React from 'react'

const AdditionalActions: React.FC<{
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsOpenModal }) => (
  <div className="d-flex m-3   ml-auto">
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <button
      onClick={() => setIsOpenModal(true)}
      className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
    >
      <i className="fa fa-search text-primary" />
    </button>
    <a href="/#" className="position-relative me-4 my-auto">
      <i className="fas fa-shopping-bag fa-2x" />
      <span
        className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
        style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}
      >
        {' '}
        3
      </span>
    </a>
    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
    <a href="/#" className="my-auto">
      <i className="fas faa-user fa-2x" />
    </a>
  </div>
)
export default AdditionalActions