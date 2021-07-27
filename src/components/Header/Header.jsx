import "./header.scss";
import Logo from "../../assets/Logo.png";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header" id={theme}>
      <div className="wrapper">
        <div className="left">
          <a href="#Main">
            {" "}
            <img src={Logo} alt="icone" height="45" />
          </a>
        </div>
        <div className="right">
          <ul className="list">
            <li>
              <a href="#Main">Home</a>
            </li>
            <li>
              <a href="#Sobre">Sobre</a>
            </li>
            <li>
              <a href="#Projetos">Projetos</a>
            </li>
            <li>
              <a href="#Contato">Contato</a>
            </li>
          </ul>
          {/* <button className="dark">
            <FaMoon className="moon" />
          </button> */}
          <button onClick={toggleTheme} className="toggle">
            {theme === "dark" ? (
              <MdWbSunny className="sun" />
            ) : (
              <FaMoon className="moon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
