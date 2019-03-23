import React, { Component } from 'react'
import { DEFAULT_TAGS } from '../config'
import TitleBar from '../Components/TitleBar/TitleBar'
import ToolBar from '../Components/ToolBar/ToolBar'
import TagList from '../Components/TagList/TagList'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: DEFAULT_TAGS
    }
  }

  render() {
    return (
      <div className='App'>
        <TitleBar />
        <ToolBar />
        <TagList defaultTags={this.state.tags} />
      </div>
    )
  }
}
