import React from 'react'
import { Check } from 'react-feather'
import './TagList.css'

const TagList = (props) => {
  return (
    <div className='TagList'>
      <span>Target platform</span>
      {props.defaultTags.map((tag, index) => (
        <label
          className='TagListItem'
          tabIndex={index + 1}
          key={index} >
          <input
            hidden
            type='checkbox'
            value={tag} />
          <span>{tag}<Check className='Icon'/></span>
        </label>
      ))}
    </div>
  )
}

export default TagList
