import "./MenuLateral.css";
import logo from "../assets/logos/logo-footer.png";
import ButtonLaranja from "./ButtonLaranja";
import NavMenu from "./NavMenu";
import { TbMapPinFilled } from "react-icons/tb";

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuLateral({ isOpen, onClose }: MenuLateralProps) {

  return (
    <>
      <div className={`menu-lateral ${isOpen ? "open" : ""}`}>
        <div className="menu-logo">
          <a href="/" className="logo-menu">
            <img src={logo} alt="Ir para o Inicio" />
          </a>
        </div>

        <div className="menu-links">
          <NavMenu variant="sidebar" menuOpen={true} onItemClick={onClose} />
        </div>

        <div className="como-chegar">
          <a> <TbMapPinFilled />COMO CHEGAR AO EVENTO?</a>
        </div>

        <ButtonLaranja text="GARANTA SEU INGRESSO" link="/#ingressos" />
      </div>

      {isOpen && <div className="menu-overlay" onClick={onClose}></div>}
    </>
  );
}

export default MenuLateral;
