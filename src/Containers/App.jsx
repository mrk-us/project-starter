const { app, dialog } = require('electron').remote
import React, { Component } from 'react'
import { DEFAULT_TAGS } from '../config'
import { selectDirectory } from '../Utils/SelectDirectory'
import TitleBar from '../Components/TitleBar/TitleBar'
import ToolBar from '../Components/ToolBar/ToolBar'
import NameProject from '../Components/NameProject/NameProject'
import TagList from '../Components/TagList/TagList'
import AddTag from '../Components/AddTag/AddTag'
import ProjectLocation from '../Components/ProjectLocation/ProjectLocation'
import './App.css'

const HOME_DIRECTORY = app.getPath('home') + '/Projects';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: DEFAULT_TAGS,
      switch: false,
      projectName: ''
    }
  }

  nameHandler = event => this.setState({projectName: event.target.value})

  addTagSwitchHandler = () => this.setState({switch: !this.state.switch})

  addTagHandler = event => {
    const setTags = [...this.state.tags, event.target.value]
    this.setState({
      tags: setTags
    })
  }

  render() {
    return (
      <div className='App'>
        <TitleBar />
        <NameProject change={() => this.nameHandler(event)}/>
        <TagList defaultTags={this.state.tags} />
        <AddTag
          switch={this.state.switch}
          handleSwitch={this.addTagSwitchHandler}
          handleAdd={() => this.addTagHandler(event)} />
        <ProjectLocation
          location={HOME_DIRECTORY}
          name={this.state.projectName}
          clicked={() => selectDirectory()}/>
      </div>
    )
  }
}
