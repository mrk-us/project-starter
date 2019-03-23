import React from 'react'
import './AddTag.css'

const AddTag = (props) => {
  return (
    props.switch ?
      <input
        className='InputTag'
        type='text'
        autoFocus
        onBlur={props.handleSwitch} />
    :
      <button
        className='AddTag'
        onClick={props.handleSwitch} >
        Add Tag
      </button>
  )
}

export default AddTag
