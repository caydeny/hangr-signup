import { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div
        className={`navbar__toggle ${isOpen? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"10%"}}>
        <img src="/logo_header.svg" alt="logo" />
        <img className="logo" src="/logo.svg" />
      </div>
        
      <div className={`navbar__links ${isOpen ? "active" : ""}`}>
        <a className="navbar__link" href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a className="navbar__link" href="#features" onClick={() => setIsOpen(false)}>Features</a>
        <a className="navbar__link" href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
        <a className="navbar__link" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;