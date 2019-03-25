import React from 'react'
import Aux from '../../Hoc/Aux'
import './ProjectLocation.css'

const ProjectLocation = props => {
  return (
    <Aux>
      <span className='SectionTitle'>Project Location</span>
      <button
        className='ProjectLocation'
        onClick={props.clicked}>
        {props.location}/{props.name}
      </button>
  </Aux>
  )
}

export default ProjectLocation
