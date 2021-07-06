import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import "./app.scss";

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Header />

        <section className="sections">
          <Main />
          <About />
          <Portfolio />
          <Contact />
        </section>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
