import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Navbar className='navbar-humanie fixed-top' expand='md'>
      <NavbarToggler />
      <NavbarBrand href='/' className='mr-auto'>
        <img src='./assets/logos/logo.png' alt='Logo' heigth='50' width='50' /> Humanie Design
      </NavbarBrand>
      <Collapse isOpen navbar>
        <Nav navbar>
          <NavItem>
            <NavLink to='/apropos' className='nav-link'>
            À propos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/services' className='nav-link'>
            Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/realisations' className='nav-link'>
            Réalisations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/contact' className='nav-link'>
            Contact
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/' className='nav-link'>
              <a className='btn btn-social-icon btn-facebook m-1' href='https://www.facebook.com/humaniedesign'><i className='fa fa-facebook' /></a>
              <a className='btn btn-social-icon btn-pinterest' href='https:www.pinterest.com'><i className='fa fa-pinterest' /></a>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

class Header extends Component {
  render () {
    return (
      <NavigationBar />
    )
  }
}

export default Header
