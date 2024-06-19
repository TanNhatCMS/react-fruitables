import type React from "react"
import { Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NavigationLinks: React.FC<{ activeLink: string }> = ({ activeLink }) => {
  const navigate = useNavigate()

  return (
    <Nav className="mx-auto">
      <Nav.Link onClick={() => navigate("/")} active={activeLink === ""}>
        Home
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/products")} active={activeLink === "products"}>
        Products
      </Nav.Link>
      <Nav.Link
        active={activeLink.startsWith("product") && activeLink !== "products"}
      >
        Product Detail
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/shop")} active={activeLink === "shop"}>
        Shop
      </Nav.Link>
      <Nav.Link onClick={() => navigate("/shop-detail")} active={activeLink === "shop-detail"}>
        Shop Detail
      </Nav.Link>
      <NavDropdown title="Pages" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => navigate("/cart")}>
          Cart
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/checkout")}>
          Checkout
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/testimonial")}>
          Testimonial
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => navigate("/404")}>
          404 Page
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link onClick={() => navigate("/contact")} active={activeLink === "contact"}>
        Contact
      </Nav.Link>
    </Nav>
  )
}

export default NavigationLinks
