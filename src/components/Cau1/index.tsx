import React, { useEffect, useState } from "react"
import { Nav, NavDropdown } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

type Category = {
  slug: string;
  name: string;
  url: string;
};

const fetchCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories")
  return response.data as Category[]
}

const Cau1: React.FC = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")
  const navigate = useNavigate()

  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategories()
      setCategories(categories)
    }
    getCategories()
  }, [])
  useEffect(() => {
    const currentPath = location.pathname.slice(1)
    setActiveLink(currentPath)
    console.log(activeLink)
  }, [location])
  return (
    <Nav className="mx-auto">
      {categories.map((item, index) => (
        index < 5 && (
          <Nav.Link
            key={index}
            onClick={() => navigate("/category/" + item.slug)}
            active={activeLink === ("category/" + item.slug)}
          >
            {item.name}
          </Nav.Link>
        )
      ))}
    </Nav>
  )
}

export default Cau1
