import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import HeaderPicture from '../components/HeaderPicture'

class About extends Component {
  render () {
    return (
      <div className='container'>
        <HeaderPicture path='/assets/headers/about.jpg' />

        <div className='row flex-nowrap justify-content-between align-items-center'>
          <div className='p-3 p-md-5'>
            <h1 className='text-center display-4'>À PROPOS</h1>
            <p className='lead my-4' id='about'>
          Humanie Design se spécialise dans la conception de projet résidentiel, commercial et adapté. Chaque concept
          est personnalisé en fonction de votre environnement et de vos besoins afin d&apos;en arriver à un projet qui vous
          représente. De plus, c&apos;est avec l&apos;écoute, la détermination et la passion du design que notre équipe sera vous
          guider. Nous sommes toujours prêts à concevoir de nouveaux projets et à partager nos nouvelles connaissances
          avec vous!
            </p>
            <h2 className='text-center display-5'>Qui est la créatrice derrière Humanie Design?</h2>
            <Row mb={2}>
              <Col md={6} className='my-auto'>
                <img className='img-fluid' src='assets/images/about/designer.jpg' alt='designer' />
              </Col>
              <Col md={6}>
                <p className='my-3'>
              Je me présente, Alyssia Boutet, propriétaire et designer intérieur de Humanie Design Conception d&apos;espace.
              À
              la suite de mes études en technique en design intérieur, j&apos;ai créé mon entreprise. Cela fait maintenant 3
              ans que cette entreprise existe. En tant que designer intérieur, nous sommes experts en création,
              conception, gestion et finition. Je souhaite mettre l&apos;emphase sur l&apos;aspect humain. L&apos;environnement dans
              lequel on habite, je trouve que c&apos;est important de le mettre à notre goût à nous. Parfois, les gens
              s&apos;oublient et veulent la dernière tendance, même si cela ne les représentent pas. Je veux démontrer aux
              gens
              que tous les styles sont beaux. C&apos;est à moi de leur offrir un projet qui les représente en tenant compte
              de
              leurs besoins spécifiques. De rendre le tout esthétique, fonctionnel et intemporel, car je veux offrir un
              environnement qui sera unique pour chaque client.
                </p>
              </Col>
            </Row>

          </div>
        </div>
      </div>
    )
  }
}

export default About
