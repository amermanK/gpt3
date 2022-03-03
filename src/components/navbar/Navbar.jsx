import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Menu from '../menu/Menu';
import Burger from '../burgermenu/Burger';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> Block Element Modifier

const Navbar = () => {

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        <Burger />
      </div>
    </div>
  )
}

export default Navbar
