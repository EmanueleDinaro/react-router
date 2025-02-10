export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="">
          <img src="../../img/logo.jpg" alt="logo bakery" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#prodotti">Prodotti</a>
          </li>
          <li>
            <a href="#contatti">Contatti</a>
          </li>
          <li>
            <a href="#chi-siamo">Chi siamo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
