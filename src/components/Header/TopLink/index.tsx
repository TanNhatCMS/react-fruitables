import React from 'react'

const TopLink: React.FC = () => {
  const values = ['Privacy Policy', 'Terms of Use', 'Sales and Refunds']
  const link = ['/index.html', '/index.html', '/index.html']
  return (
    <div className="top-link pe-2">
      {values.map((v, i) => (
        <a href={link[i]} className="text-white">
          <small className="text-white mx-2">{v}</small>
          /
        </a>
      ),
      )}
    </div>
  )
}

export default TopLink