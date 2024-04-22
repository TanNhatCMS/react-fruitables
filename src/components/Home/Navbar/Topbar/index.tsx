import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Topbar: React.FC = () => (
  <div className="container topbar bg-primary d-none d-lg-block">
    <div className="d-flex justify-content-between">
      <div className="top-info ps-2">
        <small className="me-3">
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="me-2 text-secondary" />
          <a
            href="/#"
            className="text-white"
          >
            123
            Street, New York
          </a>
          {' '}
          <FontAwesomeIcon icon={['fas', 'envelope']} className="me-2 text-secondary" />
          <a
            href="/#"
            className="text-white"
          >
            Email@Example.com
          </a>
        </small>
      </div>
      <div className="top-link pe-2">
        <a href="/#" className="text-white">
          <small className="text-white mx-2">Privacy Policy</small>
          /
        </a>
        <a href="/#" className="text-white">
          <small className="text-white mx-2">Terms of Use</small>
          /
        </a>
        <a href="/#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
      </div>
    </div>
  </div>

)

export default Topbar