import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import "./app.scss";

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Header />

        <section className="sections">
          <Main />
          <Sobre />
          <Projetos />
          <Contato />
        </section>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
