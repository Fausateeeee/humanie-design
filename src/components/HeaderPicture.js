import React from 'react'
import PropTypes from 'prop-types'

export const HeaderPicture = ({ path }) => {
  const picture = (
    <div className='row flex-nowrap justify-content-between align-items-center mt-3'>
      <img src={path} className='img-fluid' alt='header' />
    </div>
  )

  return (
    path ? picture : <div />
  )
}

HeaderPicture.propTypes = {
  path: PropTypes.string
}
