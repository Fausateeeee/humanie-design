import React, { Component } from 'react'
import HeaderPicture from '../components/HeaderPicture'
import { Form, FormGroup, Button, Label, Input, Col, Row } from 'reactstrap'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

class Contact extends Component {
  render () {
    return (
      <div className='container'>
        <HeaderPicture path='/assets/headers/contact.jpg' />
        <div className='p-3 p-md-5' id='services'>
          <h1 className='text-center display-4'>Contactez-Nous</h1>
          <Row mb={2}>
            <p className='my-3'>
              Vous avez besoin d&apos;aide avec l&apos;un de vos projets? Nous sommes là pour vous aider à le
              réaliser.
              Prendre rendez-vous avec nous par courriel et/ou par téléphone. Laissez-nous savoir en quoi
              consiste
              votre projet via notre site et nous vous contacterons!
            </p>
          </Row>
          <Form>
            <FormGroup row>
              <Label for='nameInput' sm={3}>Prénom</Label>
              <Col sm={9}>
                <Input type='text' name='name' id='nameInput' placeholder='Prénom' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='lastnameInput' sm={3}>Nom de famille</Label>
              <Col sm={9}>
                <Input type='text' name='lastname' id='lastnameInput' placeholder='Nom de famille' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='emailInput' sm={3}>Courriel</Label>
              <Col sm={9}>
                <Input type='email' name='email' id='emailInput' placeholder='Courriel' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='cityInput' sm={3}>Ville</Label>
              <Col sm={9}>
                <Input type='text' name='city' id='cityInput' placeholder='Ville' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='phoneInput' sm={3}>Téléphone</Label>
              <Col sm={9}>
                <Input type='tel' name='phone' id='phoneInput' placeholder='Téléphone' />
              </Col>
            </FormGroup>
          </Form>
          <ul>
            <li>Humanie Design Conception d&apos;espace</li>
            <li>892 avenue Bon-Air</li>
            <li>Québec, QC., G1V 2P5</li>
            <li>Tel.581-982-0378 </li>
          </ul>

        </div>
      </div>
    )
  }
}

export default Contact
