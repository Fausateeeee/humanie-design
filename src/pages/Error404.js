import React, { Component } from 'react'
import { Layout } from '../components'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Error404 = () => {
  return (
    <div>
      <h1>This is a 404, sadface :(</h1>
    </div>
  )
}

class Error404Page extends Component {
  render () {
    return <Layout headerPicture='' pageComponent={<Error404 />} />
  }
}

export default Error404Page
