import "./ToggleMenu.css";
import { useRef, useState } from "react";
import MenuLateral from "./MenuLateral";

function ToggleMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    if (checkboxRef.current) {
      checkboxRef.current.checked = false; // força o botão a voltar pro "hambúrguer"
    }
  };
  return (
    <div className="toggle-menu">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleMenu}
        ref={checkboxRef}
      />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="first"></div>
        <div className="bars" id="second"></div>
        <div className="bars" id="third"></div>
      </label>

      <MenuLateral isOpen={menuOpen} onClose={closeMenu} />
    </div>
  );
}

export default ToggleMenu;
