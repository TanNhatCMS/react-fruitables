// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faUserShield, faExchangeAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: faCarSide, title: 'Free Shipping', description: 'Free on order over $300' },
    { icon: faUserShield, title: 'Security Payment', description: '100% security payment' },
    { icon: faExchangeAlt, title: '30 Day Return', description: '30 day money guarantee' },
    { icon: faPhoneAlt, title: '24/7 Support', description: 'Support every time fast' },
  ]
  return (
    <div className="container-fluid features py-5">
      <Container className="py-5">
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="features-item text-center rounded bg-light p-4">
                <div className="features-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <FontAwesomeIcon icon={feature.icon} className="text-white fa-3x" />
                </div>
                <div className="features-content text-center">
                  <h5>{feature.title}</h5>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default FeaturesSection
