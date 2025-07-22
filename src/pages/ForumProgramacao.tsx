import "./ForumProgramacao.css";
import programacao from "../consts/Programacao";
import LinhaProgramacao from "../components/LinhaProgramacao";
import DiaForum from "../components/DiaForum";

function ForumProgramacao() {
  return (
    <section className="programacao">
      <div className="forum-programacao">
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
