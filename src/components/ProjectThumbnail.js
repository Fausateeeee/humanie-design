import React, { Component } from 'react'
import { Media, Container, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

class ProjectThumbnail extends Component {
  render () {
    console.log(this.props.project.pictures.filter((element) => element.featured)[0])
    return (
      <>
        <NavLink to={'/realisations/' + this.props.project.id}>
          <img height={450} width={450} src={this.props.project.pictures.filter((element) => element.featured)[0].image} alt='Generic' />
        </NavLink>
        <h2 className='text-center'>{this.props.project.title}</h2>
      </>
    )
  }
}

ProjectThumbnail.propTypes = {
  project: {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pictures: {
      featured: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired
    }
  }
}

export default ProjectThumbnail
