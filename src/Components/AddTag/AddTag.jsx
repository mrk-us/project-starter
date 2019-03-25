import React from 'react'
import './AddTag.css'

const AddTag = props => {
  return (
    props.buttonSwitch ?
      <input
        className='InputTag'
        type='text'
        autoFocus
        onBlur={props.handleSwitch}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            {props.handleAdd(event)}
            event.target.value = ''
          }
        }} />
    :
      <button
        className='AddTag'
        onClick={props.handleSwitch} >
        Add Tag
      </button>
  )
}

export default AddTag
