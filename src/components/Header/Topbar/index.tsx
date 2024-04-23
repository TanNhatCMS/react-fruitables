import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 992) {
        if (window.scrollY > 55) {
          document.querySelector('.fixed-top')?.classList.add('shadow')
        } else {
          document.querySelector('.fixed-top')?.classList.remove('shadow')
        }
      } else if (window.scrollY > 55) {
        document.querySelector('.fixed-top')?.classList.add('shadow')
        document.querySelector('.fixed-top')?.setAttribute('style', 'top: -55px')
      } else {
        document.querySelector('.fixed-top')?.classList.remove('shadow')
        document.querySelector('.fixed-top')?.setAttribute('style', 'top: 0')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
      <div className="d-flex justify-content-between">
        <div className="top-info ps-2">
          <small className="me-3">
            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="me-2 text-secondary" />
            <a
              href="/public#"
              className="text-white"
            >
              123
              Street, New York
            </a>
            {' '}
            <FontAwesomeIcon icon={['fas', 'envelope']} className="me-2 text-secondary" />
            <a
              href="/public#"
              className="text-white"
            >
              Email@Example.com
            </a>
          </small>
        </div>
        <div className="top-link pe-2">
          <a href="/public#" className="text-white">
            <small className="text-white mx-2">Privacy Policy</small>
            /
          </a>
          <a href="/public#" className="text-white">
            <small className="text-white mx-2">Terms of Use</small>
            /
          </a>
          <a href="/public#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
        </div>
      </div>
    </div>

  )
}

export default Topbar