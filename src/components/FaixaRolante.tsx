import "./FaixaRolante.css";

const dataEvento = new Date("2025-09-08"); // data do fórum
const hoje = new Date();
const diffMs = dataEvento.getTime() - hoje.getTime();
const diasFaltando = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

function FaixaRolante() {
  const texto = `FALTAM ${diasFaltando} DIAS PARA O FÓRUM DE INOVAÇÃO`;

  return (
    <div className="faixa-container" arua-hidden="true">
      <div className="faixa-conteudo">
        {[...Array(10)].map((_, i) => (
          <span key={i}>{texto}</span>
        ))}
      </div>
    </div>
  );
}

export default FaixaRolante;
