import emailjs from "emailjs-com";
import ImgContato from "../../assets/contato.png";

import "./contato.scss";

import {
  FaLinkedin,
  FaInstagramSquare,
  FaEnvelope,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Contato() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "meu_site", e.target, "user_HWfAgjML3yqGNBG5cn3Cn")
      .then(
        (result) => {
          alert("Sua mensagem foi enviada com sucesso.✅");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="contato" id="Contato">
      <div className="wrapper">
        <div className="left">
          <img src={ImgContato} alt="avatar" />
          <h1>Entre em Contato</h1>
          <form onSubmit={sendEmail}>
            <div className="inputs">
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Endereço de Email"
                  name="email"
                />
              </div>
              <div>
                <textarea
                  className="form-control"
                  id=""
                  cols="50"
                  rows="5"
                  placeholder="Mensagem"
                  name="message"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="right">
          <div className="sociais">
            <h2>Me siga ou converse comigo nas redes sociais</h2>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/cesar-mach/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin color="#0e76a8" fontSize="30px" className="icon" />
                <p>cesar-mach</p>
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/o.cesar.machado/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare
                  color="#d6249f"
                  fontSize="30px"
                  className="icon"
                />
                <p>o.cesar.machado</p>
              </a>
            </div>
            <div className="twitter">
              <a
                href="https://twitter.com/cesarmach30"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare
                  color="#00aced"
                  fontSize="30px"
                  className="icon"
                />
                <p>cesarmach30</p>
              </a>
            </div>
            <div className="github">
              <a
                href="https://github.com/cesar-machado"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare
                  color="#171515"
                  fontSize="30px"
                  className="icon"
                />
                <p>cesar-machado</p>
              </a>
            </div>
            <div className="whatsApp">
              <a
                href="https://api.whatsapp.com/send?phone=5511992812563"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsappSquare
                  color="#34af23"
                  fontSize="30px"
                  className="icon"
                />
                <p> +55 11 99281-2563</p>
              </a>
              <a
                href="mailto:cesarmach19@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope color="#5436d8" fontSize="30px" className="icon" />
                <p>cesarmach19@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
