import "./NavMenu.css";
import { Link, useLocation } from "react-router-dom";

type NavMenuProps = {
  variant?: "default" | "rodape" | "sidebar";
  menuOpen?: boolean;
  onItemClick?: () => void;
};

function NavMenu({
  variant = "default",
  menuOpen = false,
  onItemClick,
}: NavMenuProps) {
  const location = useLocation();
  const menuItems = [
    { path: "/#sobre", label: "SOBRE O FÓRUM" },
    { path: "/#programacao", label: "PROGRAMAÇÃO" },
    { path: "/#ingressos", label: "INGRESSOS" },
    { path: "/#contato", label: "CONTATO" },
  ];

  return (
    <nav className={`nav-menu ${variant} ${menuOpen ? "open" : ""}`}>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`item-menu ${location.hash === item.path ? "active" : ""}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavMenu;
