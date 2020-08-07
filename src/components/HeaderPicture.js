import React from 'react'
import PropTypes from 'prop-types'

const HeaderPicture = ({ path }) => {
  return (
    <div className='row flex-nowrap justify-content-between align-items-center mt-3'>
      <img src={path} className='img-fluid' alt='header' />
    </div>

  )
}

HeaderPicture.propTypes = {
  path: PropTypes.string.isRequired
}

export default HeaderPicture
