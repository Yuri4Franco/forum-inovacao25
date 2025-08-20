import { useEffect } from "react";
import ReactDOM from "react-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdClose, MdEmail } from "react-icons/md";
import "./ModalPalestrante.css";
import { getPalestranteByNome } from "../consts/Palestrantes"; // <= cuidado com o case do arquivo
import type { Palestrante } from "../consts/Types";
import DiaForum from "./DiaForum";

type ModalPalestranteProps = {
  nome: string;
  onClose: () => void;
};

// Helpers
function normalizeUrl(url?: string): string | undefined {
  if (!url) return undefined;
  const trimmed = url.trim();
  if (!trimmed) return undefined;
  // se vier só o handle, tipo "linkedin.com/in/fulano" ou "instagram.com/fulano"
  if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}

function mailto(email?: string): string | undefined {
  if (!email) return undefined;
  const trimmed = email.trim();
  if (!trimmed) return undefined;
  return `mailto:${encodeURIComponent(trimmed)}`;
}

function ModalPalestrante({ nome, onClose }: ModalPalestranteProps) {
  const dados: Palestrante | undefined = getPalestranteByNome(nome);

  // Fecha com ESC e bloqueia scroll de fundo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  if (!dados) return null;

  const {
    foto,
    cargo,
    nome: nomeCompleto,
    empresa,
    descricao,
    painel,
    palcoDescricao,
    bloco,
    horario,
    dia,
    mes,
    diaDaSemana,
    linkedin,
    instagram,
    email,
  } = dados;

  const linkedinUrl = normalizeUrl(linkedin);
  const instagramUrl = normalizeUrl(instagram);
  const emailHref = mailto(email);

  const temAlgumaRede = Boolean(linkedinUrl || instagramUrl || emailHref);

  const content = (
    <div
      className="modalp-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalp-title"
    >
      <div
        className="modalp-backdrop"
        onClick={onClose}
        aria-hidden="true"
        data-testid="modal-backdrop"
      />
      <div className="modalp-container">
        <button className="modalp-close" aria-label="Fechar" onClick={onClose}>
          <MdClose size={24} />
        </button>

        <div className="modalp-grid">
          {/* Coluna 1: Foto */}
          <div className="modalp-col modalp-col-foto">
            <div className="modalp-foto-wrapper">
              <img
                src={foto}
                alt={nomeCompleto}
                className="modalp-foto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Coluna 2: Conteúdo */}
          <div className="modalp-col modalp-col-conteudo">
            <div className="modalp-header">
              <h2 id="modalp-title" className="modalp-nome">
                {nomeCompleto}
              </h2>
              <p className="modalp-cargo">
                {cargo}
                {empresa ? ` · ${empresa}` : ""}
              </p>
            </div>

            <section className="modalp-sobre">
              <h3 className="modalp-section-title">Sobre</h3>
              <p className="modalp-sobre-texto">{descricao || "Em breve."}</p>
            </section>

            {temAlgumaRede && (
              <section className="modalp-conecte">
                <h3 className="modalp-section-title">Conecte-se</h3>
                <div className="modalp-socials">
                  {linkedinUrl && (
                    <a
                      className="modalp-social-btn"
                      aria-label="LinkedIn"
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  )}

                  {instagramUrl && (
                    <a
                      className="modalp-social-btn"
                      aria-label="Instagram"
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  )}

                  {emailHref && (
                    <a
                      className="modalp-social-btn"
                      aria-label="E-mail"
                      href={emailHref}
                    >
                      <MdEmail />
                    </a>
                  )}
                </div>
              </section>
            )}

            <section className="modalp-forum">
              <h3 className="modalp-section-title">No Fórum de Inovação</h3>
              <div className="modalp-forum-container">
                <div className="modalp-dia-forum">
                  <DiaForum
                    mes={mes}
                    dia={dia.split("/")[0]} // suporta "08" ou "08/09"
                    diaDaSemana={diaDaSemana}
                  />
                </div>
                <div className="modalp-forum-painel-container">
                  <p className="bloco">{bloco}</p>
                  <div className="modalp-forum-painel">
                    <div className="hora">{horario}</div>
                    <div className="palco">
                      <strong>{painel}</strong>
                      <p>{palcoDescricao}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
}

export default ModalPalestrante;
