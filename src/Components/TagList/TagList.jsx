import React from 'react'
import AddTag from '../AddTag/AddTag'
import { Check } from 'react-feather'
import './TagList.css'

const TagList = props => {
  return (
    <div className='TagList'>
      <span>Target platform</span>
      {props.defaultTags.map((tag, index) => (
        <label
          className='TagListItem'
          onClick={event => props.clicked(event, tag)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              event.target.click()
            }
          }}
          tabIndex={index + 1}
          key={index} >
          <input
            hidden
            type='checkbox'
            value={tag} />
          <span>{tag}<Check className='Icon'/></span>
        </label>
      ))}
      <AddTag
        buttonSwitch={props.buttonSwitch}
        handleSwitch={props.handleSwitch}
        handleAdd={props.handleAdd} />
    </div>
  )
}

export default TagList
