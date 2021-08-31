import { useEffect, useState } from "react";
import ProjetosList from "../ProjetosList/ProjetosList";
import "./projetos.scss";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Destaques",
    },
    {
      id: "web",
      title: "Aplicações Web",
    },
    {
      id: "mobile",
      title: "Aplicações Mobile",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section className="projetos" id="Projetos">
      <h1>Projetos</h1>
      <ul>
        {list.map((item) => (
          <ProjetosList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.title}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      {/* <h3>Projetos em construção........</h3> */}
    </section>
  );
}
