import "./NavMenu.css";
import { HashLink } from "react-router-hash-link";

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
  const menuItems = [
    { path: "/#sobre", label: "SOBRE O FÓRUM" },
    { path: "/#programacao", label: "PROGRAMAÇÃO" },
    { path: "/#ingressos", label: "INGRESSOS" },
    { path: "/#contato", label: "CONTATO" },
  ];

  return (
    <nav className={`nav-menu ${variant} ${menuOpen ? "open" : ""}`}>
      {menuItems.map((item) => (
        <HashLink
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`item-menu ${location.hash === item.path ? "active" : ""}`}
        >
          {item.label}
        </HashLink>
      ))}
    </nav>
  );
}

export default NavMenu;
