import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { HeaderPicture } from '../components/index'
import ProjectThumbnail from '../components/ProjectThumbnail'
import Project from '../components/Project'
import PropTypes from 'prop-types'
import PROJECTS from '../data/projects'

const ProjectsNavigator = () => {
  return (
    <div className='p-3 p-md-5' id='realisations'>
      <h1 className='text-center display-4'>Projets résidentiels</h1>
      <Row>
        <Col>
          <ProjectThumbnail project={PROJECTS[0]} />
        </Col>
        <Col>
          <ProjectThumbnail project={PROJECTS[1]} />
        </Col>
      </Row>
    </div>)
}

const ProjectExplorer = ({ id }) => {
  const project = PROJECTS.filter((el) => { return el.id == id })[0]
  return <Project project={project} />
}

class RealisationsPage extends Component {
  render () {
    console.log(this.props.match.params.projectId)

    return (
      <Container>
        <HeaderPicture path='/assets/headers/realisations.jpg' />
        {this.props.match.params.projectId ? <ProjectExplorer id={this.props.match.params.projectId} /> : <ProjectsNavigator />}
      </Container>
    )
  }
}

export default RealisationsPage

RealisationsPage.propTypes = {
  match: {
    params: {
      projectId: PropTypes.number
    }
  }

}
