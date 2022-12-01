import './sobre.scss';
import Back from '../../assets/fundo-branco.png';
// import { useTheme } from "../../hooks/useTheme";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

export default function Sobre() {
  // const { theme } = useTheme();
  return (
    <section className='about' id='Sobre'>
      <div className='wrapper'>
        <div className='left'>
          <div className='content'>
            <h2>Seja bem-vindo</h2>
            <p>
              O objetivo deste site é divulgar meus conhecimentos profissionais
              e alguns projetos desenvolvidos ao longo de minha carreira.
            </p>
            <p>
              Sou desenvolvedor front-end e mobile com React Native. Atualmente
              estou trabalhando como Instrutor de Informática no
              <a href='https://institutostefaniniead.com.br/'>
                Instituto Stefanini
              </a>
              .
            </p>
            <h3>
              Tenho interesse em vagas de Desenvolvedor front-end ou mobile.
            </h3>
            <a href='#Contato'>
              <button className='btn-ct'>Entre em Contato</button>
            </a>
            <a
              href='https://drive.google.com/file/d/1WKTm4IFupNNmy676hgYYQVKWFHWA3-lc/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <button className='btn-cv'> Meu Currículo</button>
            </a>
          </div>
        </div>

        <div className='right'>
          <div className='skills'>
            <div className='conteudo'>
              <h2>Tecnologias que domino </h2>
              <div className='col'>
                <div className='first-col'>
                  <p>Javascript</p>
                  <p>Typescript</p>
                  <p>React Js</p>
                  <p>React Native</p>
                  <p>Next Js</p>
                  <p>Node Js</p>
                </div>
                <div className='second-col'>
                  <p>Git</p>
                  <p>Html</p>
                  <p>Css</p>
                  <p>Sass</p>
                  <p>Styled Components</p>
                  <p>Linux</p>
                </div>
              </div>
            </div>
          </div>
          <div className='back'>
            <img src={Back} alt='Back' />
          </div>
        </div>
      </div>
    </section>
  );
}
