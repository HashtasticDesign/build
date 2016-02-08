/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';

function Navigation() {
  return (
    <ul className="navigation" role="menu">
      <li className="navigation-item">
        <a className="navigation-link" href="/" onClick={Link.handleClick}>Home</a>
      </li>
      <li className="navigation-item">
        <a className="navigation-link" href="/about" onClick={Link.handleClick}>About</a>
      </li>
    </ul>
  );
}

export default Navigation;
