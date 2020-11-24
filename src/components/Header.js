
import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/Logo.png'

class Header extends React.Component {
  render() {
    return (
      <>
      <header className= "header">
      <h1 className= "header_title"><img className= "header_imagen" src={logo}/></h1>
      </header>
      </>
    );
  }
}

export default Header;
