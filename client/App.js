import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

import NavBar from './component/navbar'

class App extends Component {
  render() {
    return (

<div>    
  <NavBar/>  
    <div style={{position: 'fixed', height: '100%', width: '100%'}}>
    <div className="arc_reactor">
        <div className="case_container">
          <div className="e7">
            <div className="semi_arc_3 e5_1">
              <div className="semi_arc_3 e5_2">
                <div className="semi_arc_3 e5_3">
                  <div className="semi_arc_3 e5_4">
                  </div>
                </div>
              </div>
            </div>
            <div className="core2"></div>
          </div>
          <ul className="marks">
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
          </ul>
        </div>
      </div>
    </div> 
</div>
  )
  }
}

App.propTypes = {

}

export default App
