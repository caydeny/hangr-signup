import { useState } from "react";
import './Navbar.css'

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className="nav">
        <button 
          className={`nav__menu ${isActive ? "active" : ""}`} 
          onClick={() => setIsActive(!isActive)}
        >
          <span className="nav__menu-bar"></span>
          <span className="nav__menu-bar"></span>
          <span className="nav__menu-bar"></span>
        </button>

        <h1 className="nav__header">hangr</h1>

        <div className={`nav__sidemenu ${isActive ? "active" : ""}`}>
          <a href="#about" className="nav__sidemenu-link" onClick={handleLinkClick}>About</a>
          <a href="#features" className="nav__sidemenu-link" onClick={handleLinkClick}>Features</a>
          <a href="#faq" className="nav__sidemenu-link" onClick={handleLinkClick}>FAQ</a>
          <a href="#contact" className="nav__sidemenu-link" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
