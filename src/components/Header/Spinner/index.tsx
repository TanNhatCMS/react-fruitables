import React, { useEffect } from 'react'

const Spinner: React.FC = () => {
  const spinner = () => {
    setTimeout(() => {
      const spinnerElement = document.getElementById('spinner')
      if (spinnerElement) {
        spinnerElement.classList.remove('show')
      }
    }, 1)
  }

  useEffect(() => {
    spinner()
  }, [])

  return (
    <div
      id="spinner"
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" role="status" />
    </div>
  )
}

export default Spinner