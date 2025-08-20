// PalestrantesGrid.jsx
import PalestranteCard from "../components/PalestranteCard";
import { palestrantes } from "../consts/Palestrantes";
import "./PalestrantesConfirmados.css";
export default function PalestrantesGrid() {
  return (
    <section className="palestrantes-section">
      <h1 className="palestrantes-titulo">
        presenças <span>CONFIRMADAS</span>
      </h1>
      <div className="palestrantes-grid">
        {palestrantes.map((p) => (
          <PalestranteCard key={p.nome} dados={p} />
        ))}
      </div>
    </section>
  );
}
