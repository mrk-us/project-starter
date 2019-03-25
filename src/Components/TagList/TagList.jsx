import React from 'react'
import AddTag from '../AddTag/AddTag'
import { Check, Minus } from 'react-feather'
import './TagList.css'

const TagList = props => {
  let removeTag = null
  return (
    <div className='TagList'>
      <span>Target platform</span>
      <button
        className='EditButton'
        tabIndex='-1'
        onClick={props.editClicked} >
        {props.editHandler ? 'cancel' : 'edit'}
      </button>
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
          {props.editHandler ?
            <button
              className='RemoveTag'
              onClick={() => props.removeTag(index)}>
              <Minus />
            </button>
          :
            null}
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
