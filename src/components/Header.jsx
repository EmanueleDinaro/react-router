import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src="../../img/logo.jpg" alt="logo bakery" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/prodotti">Prodotti</NavLink>
          </li>
          <li>
            <NavLink to="/contatti">Contatti</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Chi siamo</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
