import React, { Component } from 'react'
const { app, dialog } = require('electron').remote
import { DEFAULT_TAGS } from '../config'
import TitleBar from '../Components/TitleBar/TitleBar'
import ToolBar from '../Components/ToolBar/ToolBar'
import NameProject from '../Components/NameProject/NameProject'
import TagList from '../Components/TagList/TagList'
import ProjectLocation from '../Components/ProjectLocation/ProjectLocation'
import CreateProject from '../Components/CreateProject/CreateProject'
import { createDirectory } from '../Utils/CreateDirectory'
import './App.css'

const HOME_DIRECTORY = app.getPath('home') + '/Projects'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: DEFAULT_TAGS,
      checkedTags: [],
      buttonSwitch: false,
      tagsEditable: false,
      projectName: '',
      projectLocation: HOME_DIRECTORY
    }
  }

  nameHandler = event => this.setState({projectName: event.target.value})

  checkedTagsHandler = (event, props) => {
    let setCheckedTags
    if (event.target.checked) {
      setCheckedTags = [...this.state.checkedTags, event.target.value]
    }
    else {
      setCheckedTags = [...this.state.checkedTags].filter(
        index => this.state.checkedTags.indexOf(index) !== this.state.checkedTags.indexOf(props)
      );
    }
    console.log(setCheckedTags)
    this.setState({
      checkedTags: setCheckedTags
    })
  };

  addTagSwitchHandler = () => this.setState({buttonSwitch: !this.state.buttonSwitch})

  addTagHandler = event => {
    const setTags = [...this.state.tags, event.target.value]
    this.setState({
      tags: setTags
    })
  }

  editTagsHandler = () => {
    this.setState({
      tagsEditable: !this.state.tagsEditable
    })
  }

  removeTagHandler = indexToDelete => {
    let editedTags = [...this.state.tags].filter(
      index => this.state.tags.indexOf(index) !== indexToDelete
    )
    this.setState({
      tags: editedTags
    })
  }

  selectDirectory = () => {
    const options = {
      defaultPath: app.getPath('home'),
      buttonLabel: 'Choose',
      properties: ['openDirectory']
    }
    const selectedDirectory = dialog.showOpenDialog(options)
    this.setState({
      projectLocation: selectedDirectory
    })
  }

  render() {
    return (
      <div className='App'>
        <TitleBar />
        <NameProject change={this.nameHandler}/>
        <TagList
          defaultTags={this.state.tags}
          clicked={this.checkedTagsHandler}
          buttonSwitch={this.state.buttonSwitch}
          handleSwitch={this.addTagSwitchHandler}
          handleAdd={this.addTagHandler}
          editHandler={this.state.tagsEditable}
          editClicked={this.editTagsHandler}
          removeTag={this.removeTagHandler} />
        <ProjectLocation
          location={this.state.projectLocation}
          name={this.state.projectName}
          clicked={this.selectDirectory} />
        <CreateProject clicked={() => createDirectory(this.state.checkedTags, this.state.projectName, this.state.projectLocation)}/>
      </div>
    )
  }
}
