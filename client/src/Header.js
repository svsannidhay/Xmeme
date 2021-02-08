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
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Xmeme</span>
          <span class="heading-primary-sub">a meme sharing platform</span>
        </h1>
      </div>
        <div className="input-form">
          <form action="">
            <input className ="input-field input-name" type="text"
              placeholder = "Name"
            />
            <input className ="input-field input-caption" type="text"
              placeholder = "Caption"
            />
            <input className ="input-field filed input-url" type="text"
              placeholder = "Meme Url"
            />
          </form>
        </div>
      </header>
    </div>
  )
}

export default Header
