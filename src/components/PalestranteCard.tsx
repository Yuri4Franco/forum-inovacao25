import { useState } from "react";
import type { Palestrante } from "../consts/Types";
import "./PalestranteCard.css";
import ModalPalestrante from "./ModalPalestrante";

type Props = {
  dados: Palestrante;
};

function PalestranteCard({ dados }: Props) {
  // Hooks sempre no topo, sem retornos antes:
  const [aberto, setAberto] = useState(false);

  if (!dados) return null;

  const { nome, cargo, empresa, foto } = dados;

  return (
    <>
      <article className="palestrante-card">
        <div className="palestrante-card-media">
          <div className="palestrante-card-orb" />
          <img
            className="palestrante-card-img"
            src={foto}
            alt={nome}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="palestrante-card-body">
          <h1 className="palestrante-card-nome">{nome}</h1>
          <p className="palestrante-card-cargo">{cargo} | {empresa}</p>
          <button className="btn" onClick={() => setAberto(true)}>
            SAIBA MAIS
          </button>
        </div>
      </article>

      {aberto && (
        <ModalPalestrante nome={nome} onClose={() => setAberto(false)} />
      )}
    </>
  );
}

export default PalestranteCard;
