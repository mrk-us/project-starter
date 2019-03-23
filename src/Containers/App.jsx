import React, { Component } from 'react'
import { DEFAULT_TAGS } from '../config'
import TitleBar from '../Components/TitleBar/TitleBar'
import ToolBar from '../Components/ToolBar/ToolBar'
import NameProject from '../Components/NameProject/NameProject'
import TagList from '../Components/TagList/TagList'
import AddTag from '../Components/AddTag/AddTag'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: DEFAULT_TAGS,
      switch: false
    }
  }

  addTagSwitchHandler = () => this.setState({switch: !this.state.switch})

  render() {
    return (
      <div className='App'>
        <TitleBar />
        <NameProject />
        <TagList defaultTags={this.state.tags} />
        <AddTag
          switch={this.state.switch}
          handleSwitch={() => this.addTagSwitchHandler()} />
      </div>
    )
  }
}
