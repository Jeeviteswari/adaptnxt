import {Component} from 'react'

import Header from './components/Header'
import MainContainer from './components/MainContainer'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <MainContainer />
      </div>
    )
  }
}

export default App
