import React from 'react'
import { Container } from 'react-bootstrap'
import Topbar from './Topbar'
import Navibar from './Navibar'
import Spinner from './Spinner'
import ModalSearch from './ModalSearch'

const Header: React.FC = () => {
  return (
    <>
      <Spinner />
      <header className="container-fluid fixed-top">
        <Topbar />
        <Container className="px-0">
          <Navibar />
        </Container>
      </header>
      <ModalSearch />
    </>
  )
}

export default Header