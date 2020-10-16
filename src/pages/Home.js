import React, { Component } from 'react'
import { Layout } from '../components/index'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <h1>This is home hello</h1>
    </div>
  )
}

class HomePage extends Component {
  render () {
    return (
      <Layout headerPicture='' pageComponent={<Home />} />
    )
  }
}

export default HomePage
