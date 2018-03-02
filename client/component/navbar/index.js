import React, { PureComponent } from 'react';
import './style.css';


class NavBar extends PureComponent {
  render() {
    return (
      <header className="header">
        <h1 className="logo"><a>VT</a></h1>
        <ul className="main-nav">
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Portfolio</a></li>
          <li><a>Contact</a></li>
        </ul>
      </header>
    );
  }
}

export default NavBar
