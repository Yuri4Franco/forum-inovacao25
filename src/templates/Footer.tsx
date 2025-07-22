import "./Footer.css";
import logo from "../assets/logos/logo-footer.png";
import NavMenu from "../components/NavMenu";
import RedesSociais from "../components/RedesSociais";
import ButtonLaranja from "../components/ButtonLaranja";
import { TbMapPinFilled } from "react-icons/tb";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="/" className="logo-footer">
          <img src={logo} alt="Ir para o Inicio" />
        </a>
        <RedesSociais />
      </div>
      <div className="footer-menu">
        <h1>MENU</h1>
        <NavMenu variant="rodape" />
      </div>

      <div className="footer-cta">
        <a
          className="como-chegar"
          target="_blank"
          rel="noreferrer"
          href="https://maps.app.goo.gl/8bKbfMAwewcxAyc9A"
        >
          <TbMapPinFilled />
          COMO CHEGAR AO EVENTO?
        </a>

        <ButtonLaranja
          text="GARANTA SEU INGRESSO"
          link="https://www.sympla.com.br/evento/3-forum-de-inovacao/3042419"
        />
      </div>

      <div className="footer-copy">
        <p>©Fórum de Inovação</p>
        <p>|</p>
        <a href="/privacidade" target="_blank" rel="noreferrer" >Politica de Privacidade</a>
      </div>
    </footer>
  );
}

export default Footer;
