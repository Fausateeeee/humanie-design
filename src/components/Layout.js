import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderPicture, NavigationBar } from './index'

class Layout extends Component {
  render () {
    return (
      <>
        <NavigationBar active={this.props.pageActive} />
        <HeaderPicture path={this.props.headerPicture} />
        {this.props.pageComponent}
      </>
    )
  }
}

Layout.propTypes = {
  pageActive: PropTypes.string,
  headerPicture: PropTypes.string,
  pageComponent: PropTypes.element
}

export default Layout
