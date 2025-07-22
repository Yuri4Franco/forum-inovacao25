import "./ForumProgramacao.css";
import programacao from "../consts/Programacao";
import LinhaProgramacao from "../components/LinhaProgramacao";
import DiaForum from "../components/DiaForum";

function ForumProgramacao() {
  return (
    <section className="programacao">
      <div className="custom-shape-divider-top-1753203812">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="forum-programacao">
        <h1 id="programacao-titulo">
          confira a <span className="destaque break">PROGRAMAÇÃO OFICIAL</span>
        </h1>
        {programacao.map((diaItem, idx) => (
          <div key={idx} className="dia-bloco">
            <DiaForum
              mes={diaItem.mes}
              dia={diaItem.dia.split("/")[0]}
              diaDaSemana={diaItem.diaDaSemana}
            />
            {diaItem.blocos.map((bloco, index) => (
              <div key={index} className="bloco-programacao">
                {bloco.nome && <h3 className="titulo-bloco">{bloco.nome}</h3>}
                {bloco.horarios.map((evento, i) => (
                  <LinhaProgramacao
                    key={i}
                    horario={evento.horario}
                    palcos={evento.palcos}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ForumProgramacao;
