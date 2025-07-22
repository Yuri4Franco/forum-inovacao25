// LinhaProgramacao.tsx
import "./LinhaProgramacao.css";

interface Palco {
  titulo: string;
  descricao: string;
}

interface LinhaProgramacaoProps {
  horario: string;
  palcos: Palco[];
}

function LinhaProgramacao({ horario, palcos }: LinhaProgramacaoProps) {
  return (
    <div className="linha-programacao">
      <div className="hora">{horario}</div>
      <div className={`palcos palcos-${palcos.length}`}>
        {palcos.map((palco, i) => (
          <div key={i} className="palco">
            <strong>{palco.titulo}</strong>
            <p>{palco.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinhaProgramacao;
