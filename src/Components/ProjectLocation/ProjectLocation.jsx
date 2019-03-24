import React from 'react'
import './ProjectLocation.css'

const ProjectLocation = props => {
  return (
    <button
      className='ProjectLocation'
      onClick={props.clicked}>
      {props.location}/{props.name}
    </button>
  )
}

export default ProjectLocation
