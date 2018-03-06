import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './style.css'
import '../public/fonts/stylesheet.css'

import NavBar from './component/navbar'
// import border from './container/border'

class App extends Component {

  render() {
    return (
      <div>
        <nav className="draw">
          <NavBar />
        </nav>
        <p className="draw">
          <p >
          <h1> BIO </h1>
          I'm a fullstack software developer who is passionate about producing intuitive user experience.
          </p>
          <p>During my final semester in college, I took an intro to computer science and from that first "for" loop, everything clicked for me.</p>
          <p>
          In my previous accounting role I've was seen as a technical person. I would train new interns and employees on all types of accounting applications. I would talk to vendors and troubleshoot software. From these experiences I realized that software development is where my passion lies so I applied to Fullstack to deepen my technical knowledge. And going forward I’m looking for a software development role building a consumer facing product.
          </p>
       </p>
       <div>
       <p className="draw">INSERT OTHER STUFF </p>
       </div>
      </div>


    )
  }
}

App.propTypes = {

}

export default App


// <div style={{position: 'fixed', height: '100%', width: '100%'}}>
// <div className="arc_reactor">
// <div className="case_container">
//   <div className="e7">
//     <div className="semi_arc_3 e5_1">
//       <div className="semi_arc_3 e5_2">
//         <div className="semi_arc_3 e5_3">
//           <div className="semi_arc_3 e5_4">
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="core2"></div>
//   </div>
//   <ul className="marks">
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//     <li></li><li></li><li></li><li></li><li></li><li></li>
//   </ul>
// </div>
// </div>
// </div>