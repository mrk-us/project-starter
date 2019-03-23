import React, { Component } from 'react'
import TitleBar from '../Components/TitleBar/TitleBar'
import ToolBar from '../Components/ToolBar/ToolBar'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <TitleBar />
      </div>
    )
  }
}
