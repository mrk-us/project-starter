import React from 'react'
import './NameProject.css'

const NameProject = () => {
  return (
    <input
      placeholder='Name your project'
      type='text'
      className='NameProject'
      tabIndex='1'
      autoFocus
      onKeyPress={`// next tab`} />
  )
}

export default NameProject
