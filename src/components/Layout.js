import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HeaderPicture, NavigationBar } from './index'
import { Container } from 'reactstrap'

export class Layout extends Component {
  render () {
    return (
      <>
        <NavigationBar active={this.props.pageActive} />
        <Container>
          <HeaderPicture path={this.props.headerPicture} />
          {this.props.pageComponent}
        </Container>
      </>
    )
  }
}

Layout.propTypes = {
  pageActive: PropTypes.string,
  headerPicture: PropTypes.string,
  pageComponent: PropTypes.element
}
