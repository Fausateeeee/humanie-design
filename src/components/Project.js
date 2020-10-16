import React, { Component } from 'react'
import { Row } from 'reactstrap'
import PropTypes from 'prop-types'

// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

class Project extends Component {
  render () {
    const layedPictures = this.props.project.pictures.map((picture) => {
      console.log(picture)
      return (
        <Row key={picture.id}>
          <img className='img-fluid' src={picture.image} alt='project' />
        </Row>
      )
    })
    // console.log(this.props.project)
    return (
      <>
        <h2>This is project</h2>
        {layedPictures}
      </>
    )
  }
}

Project.propTypes = {
  project: {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pictures: {
      featured: PropTypes.bool.isRequired,
      path: PropTypes.string.isRequired
    }
  }
}

export default Project
