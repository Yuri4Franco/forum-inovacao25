import type { TrajetoriaItem } from "../consts/Types";
import "./SlideTrajetoria.css";

function SlideTrajetoria({ item }: { item: TrajetoriaItem }) {
  return (
    <section className="timeline-slide">
      <div className="timeline-header">
        <h1>{item.ano}</h1>
        <p>{item.descricao}</p>
      </div>

      {item.impacto.length > 0 && (
        <div className="timeline-impacto">
          {item.impacto.map((impact, i) => (
            <div className="impacto-item" key={i}>
              <impact.icon className="impacto-icon" />
              <p className="impacto-valor">{impact.valor}</p>
              <p className="impacto-descricao">{impact.descricao}</p>
            </div>
          ))}
        </div>
      )}

      {item.chamada && <p className="timeline-chamada">{item.chamada}</p>}

      <div className="timeline-fotos">
        {Array.isArray(item.fotos) &&
          item.fotos.map((foto, i) => (
            <img
              key={i}
              src={foto}
              alt={`Foto ${i + 1} do ano ${item.ano}`}
              className="timeline-foto"
            />
          ))}
      </div>
    </section>
  );
}

export default SlideTrajetoria;
