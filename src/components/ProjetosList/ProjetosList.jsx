import "./projetosList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "projetosList active" : "projetosList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
