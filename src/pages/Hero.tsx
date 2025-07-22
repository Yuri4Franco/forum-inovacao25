import "./Hero.css";
import logo from "../assets/logos/logo-footer.png";
import { BsPinMapFill } from "react-icons/bs";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-logo">
        <img src={logo} alt="Fórum de Inovação" />
        <h2>
          <strong>08</strong>e<strong>09</strong>de Setembro
        </h2>
        <p>
          Hackeie o futuro com a gente! Bora pro Fórum de Inovação? Garanta já a
          sua vaga!
        </p>
      </div>
      <div>
        <div className="hero-ingressos">
          <span>1º LOTE</span>
          <h2>INGRESSOS</h2>
          <h2>LIBERADOS</h2>
        </div>
        <div className="hero-call">
          <h2>
            <BsPinMapFill /> Afucopal - Panambi/RS
          </h2>
          <a target="_blank" rel="noreferrer" href="https://www.sympla.com.br/evento/3-forum-de-inovacao/3042419" >GARANTA SEU INGRESSO</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
