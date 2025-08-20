import type { IconType } from "react-icons";

export interface ImpactoItem {
  icon: IconType;
  valor: string;
  descricao: string;
}

export interface TrajetoriaItem {
  ano: string;
  descricao: string;
  impacto: ImpactoItem[];
  chamada?: string;
  fotos: string[];
}

export interface Palestrante {
  nome: string;
  cargo: string;
  empresa?: string;
  descricao?: string;
  foto: string;
  painel?: string;
  palcoDescricao?: string;
  bloco?: string;
  horario?: string;
  dia: string;
  mes: string;
  diaDaSemana: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}
