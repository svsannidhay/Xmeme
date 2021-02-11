import React from 'react';

import Logo from '../Images/img.png';
import './Header.css';

function Header() {

  const onButton1Click = (event) => {
    let scrollToForm = document.getElementById('wayPoint--form');
    scrollToForm.scrollIntoView({behavior: "smooth"});
  }

  const onButton2Click = (event) => {
    let scrollToMemeForm = document.getElementById('wayPoint--memeCard');
    scrollToMemeForm.scrollIntoView({behavior: "smooth"});
  }

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
        <div className="buttons">
          <a onClick =  {onButton1Click} className="btn btn--white  
          btn--animated">Post a meme</a>
          <a onClick = {onButton2Click} className="btn btn--white btn--animated">
          View memes
          </a>
        </div>
      </div>
      </header>
    </div>
  )
}

export default Header
