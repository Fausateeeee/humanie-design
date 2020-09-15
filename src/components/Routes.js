import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import Header from './Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Realisations from '../pages/Realisations'
import Contact from '../pages/Contact'

class Routes extends Component {
  render () {
    return (
      <>
        <Header path='/assets/headers/about.jpg' />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/apropos' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/realisations' component={Realisations} />
          <Route path='/realisations/:projectId' component={Realisations} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/' />
        </Switch>
      </>

    )
  }
}

export default withRouter(Routes)
