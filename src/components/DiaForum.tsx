import "./DiaForum.css";

interface DiaForumProps {
  mes: string;
  dia: string;
  diaDaSemana: string;
}
function DiaForum({ mes, dia, diaDaSemana }: DiaForumProps) {
  return (
    <div className="dia-forum">
      <h1 className="mes">{mes}</h1>
      <h1 className="dia">{dia}</h1>
      <h1 className="dia-da-semana">{diaDaSemana}</h1>
    </div>
  );
}

export default DiaForum;
