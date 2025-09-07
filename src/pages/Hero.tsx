import "./Hero.css";
import logo from "../assets/logos/logo-footer.png";
import ProgramacaoPDF from "../assets/participante/programacao-oficial.pdf";

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
          <h2>PROGRAMAÇÃO OFICIAL DISPONÍVEL</h2>
        </div>
        <div className="hero-call">
          <a download href={ProgramacaoPDF}>
            BAIXAR PROGRAMAÇÃO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
