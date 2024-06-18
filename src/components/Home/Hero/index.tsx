import type React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import CarouselHero from './CarouseHero'

const Hero: React.FC = () => (
  <div className="container-fluid py-5 mb-5 hero-header">
    <Container className="py-5">
      <Row className="g-5 align-items-center">
        <Col md={12} lg={7}>
          <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
          <h1 className="mb-5 display-3 text-primary">
            Organic Veggies &amp; Fruits Foods
          </h1>
          <div className="position-relative mx-auto">
            <Form.Control
              className="border-2 border-secondary w-75 py-3 px-4 rounded-pill"
              placeholder="Search"
            />
            <Button
              variant="primary"
              type="submit"
              className="border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
              style={{ top: 0, right: '25%' }}
            >
              Submit Now
            </Button>
          </div>
        </Col>
        <Col md={12} lg={5}>
          <CarouselHero />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Hero
