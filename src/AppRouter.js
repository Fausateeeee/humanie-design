import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { history } from './utils/history'
import Header from './components/Header'
import {
  HomePage,
  AboutPage,
  ContactPage,
  RealisationsPage,
  ServicesPage,
  Error404Page
} from './pages/index'

class AppRouter extends Component {
  render () {
    const routes = (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/apropos' component={AboutPage} />
        <Route exact path='/services' component={ServicesPage} />
        <Route exact path='/realisations' component={RealisationsPage} />
        <Route exact path='/realisations/:projectId' component={RealisationsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route component={Error404Page} />
      </Switch>
    )
    return (
      <>
        {/* <Header path='/assets/headers/about.jpg' /> */}
        <Router history={history}>
          {routes}
        </Router>
      </>

    )
  }
}

export default AppRouter
