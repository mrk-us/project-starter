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
      onKeyPress={`// next tab`}
      onChange={event => props.change(event.target.value)} />
  )
}

export default NameProject
