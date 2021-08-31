import { useEffect, useRef } from "react";
import { init } from "ityped";

import "./main.scss";
import Eu from "../../assets/eu.png";
import Back from "../../assets/eu-back.png";
import Down from "../../assets/down.png";
// import { useTheme } from "../../hooks/useTheme";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Main() {
  const textRef = useRef();
  // const { theme } = useTheme();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 600,
      strings: ["Front-end", "Mobile"],
    });
  }, []);

  return (
    <div className="main" id="Main">
      <div className="wrapper">
        <div className="left">
          <div className="image1">
            <img src={Eu} alt="eu" />
          </div>
          <div className="img2">
            <img src={Back} alt="back" />
          </div>
        </div>
        <div className="right">
          <h2>Olá, eu me chamo </h2>
          <h1>César Machado</h1>
          <h4>
            Desenvolvedor <span ref={textRef}></span>
          </h4>
          <a href="#Sobre">
            <img src={Down} alt="down" />
          </a>
        </div>
      </div>
    </div>
  );
}
