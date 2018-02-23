import React, { PureComponent } from 'react';
import './style.css'

class NavBar extends PureComponent {
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
    );
  }
}

export default NavBar
