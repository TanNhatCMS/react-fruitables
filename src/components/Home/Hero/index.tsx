import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import hero1 from '../../../assets/images/hero1.png'
import hero2 from '../../../assets/images/hero2.jpg'

const Hero: React.FC = () => (
  <>
    {/* Hero Start */}
    <div className="container-fluid py-5 mb-5 hero-header">
      <Container className="py-5">
        <Row className="g-5 align-items-center">
          <Col md={12} lg={7}>
            <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
            <h1 className="mb-5 display-3 text-primary">
              Organic Veggies &amp; Fruits Foods
            </h1>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: 0, right: '25%' }}
              >
                Submit Now
              </button>
            </div>
          </Col>
          <div className="col-md-12 col-lg-5">

            <div
              id="carouselId"
              className="carousel slide position-relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                  <img
                    srcSet=""
                    src={hero1}
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="First slide"
                  />
                  <a href="/#" className="btn px-4 py-2 text-white rounded">
                    Fruites
                  </a>
                </div>
                <div className="carousel-item rounded">
                  <img
                    src={hero2}
                    className="img-fluid w-100 h-100 rounded"
                    alt="Second slide"
                  />
                  <a href="/#" className="btn px-4 py-2 text-white rounded">
                    Vesitables
                  </a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
    {/* Hero End */}
  </>
)

export default Hero