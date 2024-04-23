import React, { useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import Topbar from './Topbar'
import Navibar from './Navibar'
import Spinner from './Spinner'
import Search from '../Modal/Search'
import { ContextModalSearch } from '../context/ContextModalSearch'

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const valueAdd = useMemo(
    () => ({
      isOpenModal,
      setIsOpenModal,
    }),
    [isOpenModal],
  )
  return (
    <ContextModalSearch.Provider value={valueAdd}>
      <Spinner />
      <header className="container-fluid fixed-top">
        <Topbar />
        <Container className="px-0">
          <Navibar />
        </Container>
      </header>
      {isOpenModal && <Search />}
    </ContextModalSearch.Provider>
  )
}

export default Header