import type React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TopInfo: React.FC = () => {
  return (
    <div className="top-info ps-2">
      <small className="me-3">
        <i className="fas fa-map-marker-alt me-2 text-secondary" />
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

  )
}

export default TopInfo
