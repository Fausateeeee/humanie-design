import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Realisations from './Realisations'
import Contact from './Contact'

class Template extends Component {
  render () {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/apropos' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/realisations' component={Realisations} />
          <Route path='/contact' component={Contact} />
          <Redirect to='/' />
        </Switch>
      </>

    )
  }
}

export default withRouter(Template)
