import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import HeaderPicture from '../components/HeaderPicture'
import PropTypes from 'prop-types'
import SERVICES from '../data/services'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const ServiceSection = ({ service, isLeft }) => {
  const layedPoints = service.points.map((point) => {
    return (
      <li key={service.id}>
        {point}
      </li>
    )
  })

  return (
    <>
      <h2 className='text-center display-5'>{service.title}</h2>
      <Row mb={2}>
        <Col md={6}>
          <ul>
            {layedPoints}
          </ul>
        </Col>
        <Col md={6} className={isLeft ? 'order-first' : ''}>
          <img className='img-fluid' src={service.image} alt='service' />
        </Col>
      </Row>

    </>
  )
}

class Services extends Component {
  render () {
    return (
      <div className='container'>
        <HeaderPicture path='/assets/headers/services.jpg' />
        <div className='p-3 p-md-5' id='services'>
          <h1 className='text-center display-4'>Services</h1>
        </div>
        <ServiceSection service={SERVICES[0]} />
        <ServiceSection service={SERVICES[1]} isLeft />
        <ServiceSection service={SERVICES[2]} />
        <ServiceSection service={SERVICES[3]} isLeft />
        <footer>
            Comme chaque projet est unique, il se peut que vous ayez un mélange de tous ses services. En temps
            qu&apos;entreprise de design intérieur, nous avons la possibilité de créer un service qui est personnalisable
            pour vous. Contactez-nous pour prendre rendez-vous et ainsi, discuter de votre projet. Il nous fera plaisir
            de vous aider !
        </footer>
      </div>
    )
  }
}

ServiceSection.propTypes = {
  service: {
    image: PropTypes.string.isRequired,
    points: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string,
    title: PropTypes.string.isRequired
  },
  isLeft: PropTypes.bool
}

export default Services
