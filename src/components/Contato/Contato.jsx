import emailjs from "emailjs-com";
import ImgContato from "../../assets/contato.png";

import "./contato.scss";

export default function Contato() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "meu_site", e.target, "user_HWfAgjML3yqGNBG5cn3Cn")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="Contato">
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
        <div className="right">Minha redes sociais</div>
      </div>
    </div>
  );
}
