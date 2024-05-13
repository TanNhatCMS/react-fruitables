import React from 'react'

const TopLink: React.FC = () =>{
  const menu = [
    {
      name: 'Privacy Policy',
      link: '/index.html',
      target: '/',
    },
    {
      name: 'Terms of Use',
      link: '/index.html',
      target: '/',
    },
    {
      name: 'Sales and Refunds',
      link: '/index.html',
      target: ' ',
    },
  ]

  return (
    <div className="top-link pe-2">
      {menu.map((v, index) => ( // Adding unique key prop
        <a key={index} href={v.link} className="text-white">
          <small className="text-white mx-2">{v.name}</small>
          {v.target}
        </a>
      ))}
    </div>
  )
}

export default TopLink
