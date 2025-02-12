import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
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
      <div className="social">
        <ul>
          <li>
            <NavLink to="#">
              <i class="fa-brands fa-facebook"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i class="fa-brands fa-instagram"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i class="fa-brands fa-x-twitter"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i class="fa-brands fa-threads"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i class="fa-brands fa-pinterest"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
