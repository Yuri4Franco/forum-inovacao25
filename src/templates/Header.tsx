import "./Header.css";
import logo from "../assets/logos/logo-header.png";
import ToggleMenu from "../components/ToggleMenu";
import NavMenu from "../components/NavMenu";
import ButtonLaranja from "../components/ButtonLaranja";
import FaixaRolante from "../components/FaixaRolante";

function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="/" className="logo">
          <img src={logo} alt="Ir para o Inicio" />
        </a>
        <NavMenu variant="default" />
        <ToggleMenu />
        <ButtonLaranja
          text="GARANTA SEU INGRESSO"
          link="/#ingressos"
          onlyDesktop={true}
        />
      </div>
      <FaixaRolante />
    </header>
  );
}

export default Header;
