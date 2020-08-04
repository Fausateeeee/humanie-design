import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap'
class Header extends Component {
  render () {
    return (
      <Navbar className='navbar-humanie' width='50' heigth='50'>
        <NavbarBrand href='/'>
          <img src='/home/fausateeeee/Projects/humanie_react/humanie-design/public/assets/logo.png' alt='Logo' />
        </NavbarBrand>
        <NavbarToggler />
        <NavItem>
          <NavLink to='/apropos'>
            À propos
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/realisations'>
            Réalisations
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </NavItem>
      </Navbar>
    )
  }
}

export default Header
