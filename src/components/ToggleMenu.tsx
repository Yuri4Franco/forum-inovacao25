import "./ToggleMenu.css";
import { useState } from "react";
import MenuLateral from "./MenuLateral";

function ToggleMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="toggle-menu">
      <input type="checkbox" id="checkbox" onChange={toggleMenu} />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="first"></div>
        <div className="bars" id="second"></div>
        <div className="bars" id="third"></div>
      </label>

      <MenuLateral isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}

export default ToggleMenu;
