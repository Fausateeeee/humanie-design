import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Layout } from '../components/index'
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
  const project = PROJECTS.filter((el) => { return el.id.toString() === id })[0]
  return <Project project={project} />
}

class RealisationsPage extends Component {
  render () {
    console.log(this.props.match.params.projectId)
    const project = this.props.match.params.projectId ? <ProjectExplorer id={this.props.match.params.projectId} /> : <ProjectsNavigator />
    return (
      <Layout pageActive='realisations' headerPicture='/assets/headers/realisations.jpg' pageComponent={project} />
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

ProjectExplorer.propTypes = {
  id: PropTypes.number
}
