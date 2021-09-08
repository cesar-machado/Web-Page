import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import "./header.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left">
            <a href="#Main">
              <img src={Logo} alt="icone" height="45" />
            </a>
          </div>
          <div className="right">
            <div id="drop-menu" className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a className="nav-links" href="#Main" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  href="#Sobre"
                  onClick={closeMobileMenu}
                >
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  href="#Projetos"
                  onClick={closeMobileMenu}
                >
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-links"
                  href="#Contato"
                  onClick={closeMobileMenu}
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
