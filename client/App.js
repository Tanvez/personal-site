import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class App extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="logo"><a href="#">VT</a></h1>
        <ul className="main-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
          </ul>
      </header>
    )
  }
}

App.propTypes = {

}

export default App
