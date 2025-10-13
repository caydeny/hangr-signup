import { useState } from "react";
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div
        className={`navbar__toggle ${isOpen? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <h1 className="navbar__title">Hangr</h1>
      <div className={`navbar__links ${isOpen ? "active" : ""}`}>
        <a className="navbar__link"href="#About">About</a>
        <a className="navbar__link" href="#FAQ">FAQ</a>
        <a className="navbar__link" href="#Contact">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;