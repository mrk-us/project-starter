import React from 'react'
import './CreateProject.css'

const CreateProject = props => {
  return (
    <button
      className='CreateProject'
      onClick={props.clicked}>
      Create Project
    </button>
  )
}

export default CreateProject
