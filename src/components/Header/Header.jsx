import './header.scss'
import Logo from '../../assets/icon.png'
// import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <a href="#Main"> <img src={Logo} alt="icone" height="45"/></a>
        </div>
        <div className="right">
          <ul className="list">
            <li><a href="#Main">Home</a></li>
            <li><a href="#About">Sobre</a></li>
            <li><a href="#Portfolio">Portfólio</a></li>
            <li><a href="#Contact">Contato</a></li>
          </ul>
          <button className="dark"><FaMoon className="moon" /></button>
        </div>
      </div>
    </div>
  )
}
