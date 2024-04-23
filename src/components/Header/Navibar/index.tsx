import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

// @ts-ignore
const IconBars: IconProp = 'fa fa-bars'
// @ts-ignore
const Navibar: React.FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  useEffect(() => {
    // Lấy path từ URL hiện tại và loại bỏ ký tự '/' ở đầu
    const currentPath = location.pathname.slice(1)
    setActiveLink(currentPath) // Cập nhật activeLink với path hiện tại
  }, [location])
  return (
    <Navbar bg="light" expand="xl" className="bg-white">
      <Navbar.Brand href="/index.html"><h1 className="text-primary display-6">Fruitables</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse">
        <FontAwesomeIcon icon={IconBars} className="py-2 px-3 text-primary" />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="mx-auto">
          <Nav.Link href="/index.html" active={activeLink === 'index.html'}>Home</Nav.Link>
          <Nav.Link href="/shop.html" active={activeLink === 'shop.html'}>Shop</Nav.Link>
          <Nav.Link href="/shop-detail.html" active={activeLink === 'shop-detail.html'}>Shop Detail</Nav.Link>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="/cart.html">Cart</NavDropdown.Item>
            <NavDropdown.Item href="/checkout.html">Checkout</NavDropdown.Item>
            <NavDropdown.Item href="/testimonial.html">Testimonial</NavDropdown.Item>
            <NavDropdown.Item href="/404.html">404 Page</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/contact.html">Contact</Nav.Link>
        </Nav>

        <div className="d-flex m-3   ml-auto">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <FontAwesomeIcon icon={['fas', 'search']} className="text-primary" />
          </button>
          <a href="/#" className="position-relative me-4 my-auto">
            <FontAwesomeIcon icon={['fas', 'shopping-bag']} className="fa-2x" />
            <span
              className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
              style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}
            >
              3
            </span>
          </a>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a href="/#" className="my-auto">
            <FontAwesomeIcon icon={['fas', 'user']} className="fa-2x" />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navibar