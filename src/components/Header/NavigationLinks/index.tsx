
import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'

const NavigationLinks: React.FC<{ activeLink: string }> = ({ activeLink }) => (
  <Nav className="mx-auto">
    <Nav.Link href="/index.html" active={activeLink === 'index.html'}>Home</Nav.Link>
    <Nav.Link href="/products" active={activeLink === 'products'}>Products</Nav.Link>
    <Nav.Link href="/product" active={activeLink === 'product'}>Product Detail</Nav.Link>
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
)
export default NavigationLinks
