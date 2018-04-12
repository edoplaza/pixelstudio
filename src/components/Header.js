import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header" role="banner">
    <div className="container">
      <Link to="/" className="header__logo">
        <img src="img/logo.svg" alt="logo" />
      </Link>
      <nav className="header__nav" role="navigation">
        <ul>
          <li><NavLink to="/about">About</NavLink></li>
          <li> <NavLink to="/portfolio">Portfolio</NavLink></li>
          <li> <NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <button className="header__pull" type="button">
        <span className="pull-box">
          <span className="pull-inner" />
        </span>
      </button>
    </div>
  </header>
)

export default Header;