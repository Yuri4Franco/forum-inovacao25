// PalestrantesGrid.jsx
import PalestranteCard from "../components/PalestranteCard";
import { palestrantes } from "../consts/Palestrantes";
import "./PalestrantesConfirmados.css";

export default function PalestrantesGrid() {
  return (
    <section className="palestrantes-section">
      <h1 className="palestrantes-titulo">
        presenças <span className="break">CONFIRMADAS</span>
      </h1>
      <div className="palestrantes-grid">
        {palestrantes
          .slice() // faz uma cópia, para não alterar o array original
          .sort((a, b) => a.nome.localeCompare(b.nome)) // ordena alfabeticamente
          .map((p) => (
            <PalestranteCard key={p.nome} dados={p} />
          ))}
      </div>
    </section>
  );
}
