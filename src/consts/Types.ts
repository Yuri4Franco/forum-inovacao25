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
