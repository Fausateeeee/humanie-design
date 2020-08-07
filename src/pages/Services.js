import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

const ServiceSection = ({ image, points, isLeft }) => {
  const layedPoints = points.map((point) => {
    return (
      <li key={image}>
        {point}
      </li>
    )
  })
  return (
    <ul>
      {layedPoints}
    </ul>
  )
}

class Services extends Component {
  render () {
    return (
      <div className='container'>
        <div className='p-3 p-md-5' id='services'>
          <h1 className='text-center display-4'>Services</h1>
        </div>
        <h2 className='text-center display-5'>Consultation à domicile</h2>
        <div className='row mb-2' id='services_domicile'>
          <div className='col-md-6'>
            <ul>
              <li>Profitez de l&apos;expertise de designer directement à votre domicile pour des idées, recommandations
                        et conseils dans vos choix de designs : peinture, aménagement et matériaux.
                        *Aucun plan n&apos;est conçu dans ce service.
              </li>
              <li>Une rencontre d&apos;une durée de 1H30 ou plus, selon vos besoins.</li>
              <li>Tarif : à partir de 150 $, peut varier selon le nombre d&apos;heure de la rencontre. </li>
            </ul>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src='/img/services/domicile_web.jpg' alt='domicile' />
          </div>
        </div>
        <h2 className='text-center display-5'>Choix d&apos;ambiances</h2>
        <div className='row mb-2' id='services_ambiances'>
          <div className='col-md-6'>
            <img className='img-fluid' src='/img/services/ambiance_web.jpg' alt='ambiance' />
          </div>
          <div className='col-md-6'>
            <ul>
              <li>Que ce soit pour des choix de matériaux, d&apos;accessoires, de colorations et/ou de décorations,
                        un designer magasine pour vous afin de moderniser votre demeure.
              </li>
              <li>Rencontre à domicile.</li>
              <li>Préparation d&apos;un document (Référence visuelle) pour vous aider dans votre magasinage :
                        décorations, meubles, etc.
              </li>
              <li>Choix de colorations.</li>
              <li>Le service peut être combiné avec une période de magasinage fait par le designer.</li>
              <li>Tarif : à partir de 350 $, peut varier selon les besoins du clients.</li>
            </ul>
          </div>
        </div>
        <h2 className='text-center display-5'>Conception sur mesure</h2>
        <div className='row mb-2'>
          <div className='col-md-6'>
            <ul>
              <li>Vous avez accès à un service de création de mobiliers sur mesure. Ce service peut être également
                        spécialisé pour des personnes à mobilité réduite afin de leur créer un environnement adapté.
              </li>
              <li>Rencontre à domicile avec prise de mesure.</li>
              <li>Plan technique pour la réalisation du mobilier sur mesure (plan, élévations, dessins techniques
                        et devis).
              </li>
              <li>Choix des matériaux pour le mobilier</li>
              <li>Possibilité de faire des soumissions d&apos;ébénisteries</li>
              <li>Le service peut être combiné avec une modélisation 3D pour visualiser le concept.</li>
              <li>Tarif : Variable, selon les besoins du clients. </li>
            </ul>
          </div>
          <div className='col-md-6'>
            <img className='img-fluid' src='img/services/mesure_web.jpg' alt='mesure' />
          </div>
        </div>
        <h2 className='text-center display-5'>Rénovation complète</h2>
        <div className='row mb-2' id='services_complets'>
          <div className='col-md-6'>
            <img className='img-fluid' src='/img/services/renovation_web.jpg' alt='renovation' />
          </div>
          <div className='col-md-6'>
            <ul>
              <li>Pour toutes pièces de la maison ou pour un projet commercial à petite échelle, nous créons un
                        environnement nouveau, de la conception jusqu&apos;à la finition.
              </li>
              <li>Rencontre à domicile avec prise de mesure.</li>
              <li>Plan technique pour la réalisation du projet (plan d&apos;aménagement, élévations, dessin technique,
                        plan de construction, plan électrique, plan de plomberie, plan de finis).
              </li>
              <li>Choix d&apos;ambiance : coloration, matériaux, accessoires et fournitures. (document de référence
                        visuelle).
              </li>
              <li>Soumission et suivi pour tout type de travaux et/ou fournitures.</li>
              <li>Modélisation 3D pour visualiser le concept</li>
              <li>Suivi de chantier avec l&apos;entrepreneur et les sous-traitants.</li>
              <li>Tarif : Variable, selon les besoins du clients. </li>
            </ul>
          </div>
        </div>
        <footer>
            Comme chaque projet est unique, il se peut que vous ayez un mélange de tous ses services. En temps
            qu&apos;entreprise de design intérieur, nous avons la possibilité de créer un service qui est personnalisable
            pour vous. Contactez-nous pour prendre rendez-vous et ainsi, discuter de votre projet. Il nous fera plaisir
            de vous aider !
        </footer>
      </div>
    )
  }
}

ServiceSection.propTypes = {
  image: PropTypes.string.isRequired,
  points: PropTypes.array.isRequired,
  isLeft: PropTypes.bool
}

export default Services
