import React from 'react';

import Logo from './Images/img.png';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img className= "logo" src={Logo} alt="Logo"/>
        </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Xmeme</span>
          <span className="heading-primary-sub">a meme sharing platform</span>
        </h1>
      </div>
      </header>
    </div>
  )
}

export default Header
