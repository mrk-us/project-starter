import React from 'react'
import './NameProject.css'

const NameProject = props => {
  return (
    <input
      placeholder='Name your project'
      type='text'
      className='NameProject'
      tabIndex='1'
      autoFocus
      onChange={event => props.change(event)} />
  )
}

export default NameProject
