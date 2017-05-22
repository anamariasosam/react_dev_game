import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="
        bg-pink
        mb3
        pa3
        shadow-5
        tc
        white
      ">
        <h2>
          { this.props.title }
        </h2>
      </div>
    );
  }
}

export default Header;
