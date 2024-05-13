import React, { useState, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { ContextModalSearch } from '../context/ContextModalSearch'
import Logo from '../Header/Logo'
import ToggleButton from '../Header/ToggleButton'
import NavigationLinks from '../Header/NavigationLinks'
import AdditionalActions from '../Header/AdditionalActions'

const NaviBar: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const valueAdd = useMemo(
    () => ({
      isOpenModal,
      setIsOpenModal,
    }),
    [isOpenModal],
  )

  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    // Lấy path từ URL hiện tại và loại bỏ ký tự '/' ở đầu
    const currentPath = location.pathname.slice(1)
    setActiveLink(currentPath) // Cập nhật activeLink với path hiện tại
  }, [location])
  return (
    <ContextModalSearch.Provider value={valueAdd}>
      <Navbar bg="light" expand="xl" className="bg-white">
        <Logo />
        <ToggleButton />
        <Navbar.Collapse id="navbarCollapse">
          <NavigationLinks activeLink={activeLink} />
          <AdditionalActions setIsOpenModal={setIsOpenModal} />
        </Navbar.Collapse>
      </Navbar>
    </ContextModalSearch.Provider>
  )
}

export default NaviBar