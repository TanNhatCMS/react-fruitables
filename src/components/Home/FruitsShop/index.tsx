import React, { useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCarSide, faUserShield, faExchangeAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import ProductList from './ProductList'

function FruitItem({ imgSrc, name, description, price }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img src={imgSrc} className="img-fluid w-100 rounded-top" alt={name} />
        </div>
        <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: 10, left: 10 }}>
          Fruits
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              $
              {price}
              {' '}
              / kg
            </p>
            <a href="/#" className="btn border border-secondary rounded-pill px-3 text-primary">
              <i className="fa fa-shopping-bag me-2 text-primary" />
              {' '}
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function TabPane({ id, active, children }) {
  return (
    <div id={id} className={`tab-pane fade show p-0 ${active ? 'active' : ''}`}>
      <div className="row g-4">{children}</div>
    </div>
  )
}

function TabbedFruits() {
  const [fruits] = useState([
    {
      imgSrc: 'img/fruite-item-5.jpg',
      name: 'Grapes',
      description: 'Grapes are berries, growing in clusters of 15 to 300, and can be crimson, black, dark blue, yellow, green, orange, and pink.',
      price: 4.99,
    },
    {
      imgSrc: 'img/fruite-item-2.jpg',
      name: 'Raspberries',
      description: 'Raspberries are a rich source of antioxidants, vitamins, and fiber. They may have health benefits including reducing inflammation and protecting against disease.',
      price: 3.99,
    },
    // Add more fruits as needed
  ])
  const [fruitsTab2] = useState([
    {
      imgSrc: 'img/fruite-item-3.jpg',
      name: 'Banana',
      description: 'Bananas are one of the most widely consumed fruits in the world. They are a good source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.',
      price: 1.99,
    },
    {
      imgSrc: 'img/fruite-item-4.jpg',
      name: 'Apricots',
      description: 'Apricots are stone fruits that are closely related to peaches and plums. They are rich in vitamins, fiber, and antioxidants, and are especially high in vitamin A and C.',
      price: 2.49,
    },
    // Add more fruits for Tab 2 as needed
  ])
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab-1">
            Tab 1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
            Tab 2
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <TabPane id="tab-1" active>
          {fruits.map((fruit, index) => (
            <FruitItem
              key={index}
              imgSrc={fruit.imgSrc}
              name={fruit.name}
              description={fruit.description}
              price={fruit.price}
            />
          ))}
        </TabPane>
        <TabPane id="tab-2" active={false}>
          {fruitsTab2.map((fruit, index) => (
            <FruitItem
              key={index}
              imgSrc={fruit.imgSrc}
              name={fruit.name}
              description={fruit.description}
              price={fruit.price}
            />
          ))}
        </TabPane>
      </div>
    </div>
  )
}

const FruitsShop = () => {
  // const features = [
  //   { icon: faCarSide, title: 'Free Shipping', description: 'Free on order over $300' },
  //   { icon: faUserShield, title: 'Security Payment', description: '100% security payment' },
  //   { icon: faExchangeAlt, title: '30 Day Return', description: '30 day money guarantee' },
  //   { icon: faPhoneAlt, title: '24/7 Support', description: 'Support every time fast' },
  // ]
  return (
    <>
      {/* Fruits Shop Start*/}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <ProductList />
            <div className="tab-content">
              <TabbedFruits />
              {/*<div id="tab-1" className="tab-pane fade show p-0 active">*/}
              {/*  <div className="row g-4">*/}
              {/*    <div className="col-lg-12">*/}
              {/*      <div className="row g-4">*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-5.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Grapes</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-5.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Grapes</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-2.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Raspberries</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-4.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Apricots</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-3.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Banana</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-1.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Oranges</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-2.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Raspberries</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-5.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Grapes</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div id="tab-2" className="tab-pane fade show p-0">*/}
              {/*  <div className="row g-4">*/}
              {/*    <div className="col-lg-12">*/}
              {/*      <div className="row g-4">*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-5.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Grapes</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-2.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Raspberries</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div id="tab-3" className="tab-pane fade show p-0">*/}
              {/*  <div className="row g-4">*/}
              {/*    <div className="col-lg-12">*/}
              {/*      <div className="row g-4">*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-1.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Oranges</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-6.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Apple</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div id="tab-4" className="tab-pane fade show p-0">*/}
              {/*  <div className="row g-4">*/}
              {/*    <div className="col-lg-12">*/}
              {/*      <div className="row g-4">*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-5.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Grapes</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-4.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Apricots</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div id="tab-5" className="tab-pane fade show p-0">*/}
              {/*  <div className="row g-4">*/}
              {/*    <div className="col-lg-12">*/}
              {/*      <div className="row g-4">*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-3.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Banana</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-2.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Raspberries</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        <div className="col-md-6 col-lg-4 col-xl-3">*/}
              {/*          <div className="rounded position-relative fruite-item">*/}
              {/*            <div className="fruite-img">*/}
              {/*              <img*/}
              {/*                src="img/fruite-item-1.jpg"*/}
              {/*                className="img-fluid w-100 rounded-top"*/}
              {/*                alt=""*/}
              {/*              />*/}
              {/*            </div>*/}
              {/*            <div*/}
              {/*              className="text-white bg-secondary px-3 py-1 rounded position-absolute"*/}
              {/*              style={{ top: 10, left: 10 }}*/}
              {/*            >*/}
              {/*              Fruits*/}
              {/*            </div>*/}
              {/*            <div className="p-4 border border-secondary border-top-0 rounded-bottom">*/}
              {/*              <h4>Oranges</h4>*/}
              {/*              <p>*/}
              {/*                Lorem ipsum dolor sit amet consectetur adipisicing*/}
              {/*                elit sed do eiusmod te incididunt*/}
              {/*              </p>*/}
              {/*              <div className="d-flex justify-content-between flex-lg-wrap">*/}
              {/*                <p className="text-dark fs-5 fw-bold mb-0">*/}
              {/*                  $4.99 / kg*/}
              {/*                </p>*/}
              {/*                <a*/}
              {/*                  href="#"*/}
              {/*                  className="btn border border-secondary rounded-pill px-3 text-primary"*/}
              {/*                >*/}
              {/*                  <i className="fa fa-shopping-bag me-2 text-primary" />*/}
              {/*                  {' '}*/}
              {/*                  Add to cart*/}
              {/*                </a>*/}
              {/*              </div>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End*/}
    </>

  )
}

export default FruitsShop
