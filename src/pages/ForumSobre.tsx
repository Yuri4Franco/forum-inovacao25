import Sobre from "../components/Sobre";
import "./ForumSobre.css";
import NossaTrajetoria from "./NossaTrajetoria";

function ForumSobre() {
  return (
    <section className="forum-sobre">
      <div className="bolhas-container">
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
        <span className="bolha"></span>
      </div>
      <div className="forum-sobre-container">
        <div>
          <Sobre />
          <p className="forum-sobre-texto">
            O <strong>Fórum de Inovação</strong> é um dos maiores encontros de
            criatividade, tecnologia e impacto do Noroeste do RS. Realizado pelo{" "}
            <strong>Instituto Agregar</strong>, em parceria com a{" "}
            <strong>ACI Panambi</strong>, conecta mentes inquietas em um
            ambiente pulsante de transformação.
          </p>
        </div>
        <div>
          <p className="forum-sobre-texto">
            Após duas edições de sucesso, o evento se consolidou como referência
            em inovação regional, reunindo empresas, startups, academia e
            lideranças em experiências imersivas e conexões poderosas.
          </p>

          <p className="forum-sobre-texto">
            Em 2025, o Fórum de Inovação acontece nos dias{" "}
            <strong>08 e 09 de setembro</strong>, na <strong>Afucopal</strong>,
            em Panambi/RS. Sob o tema <strong>“HACKEANDO O FUTURO”</strong>,
            vamos provocar ideias, explorar soluções criativas e criar impacto
            real.
          </p>

          <p className="forum-sobre-texto">
            Prepare-se para uma jornada que une indústria, agro, comércio,
            serviços, startups e educação. O futuro não será adiado — será
            hackeado.
          </p>
        </div>
      </div>
      <NossaTrajetoria />
      <div className="custom-shape-divider-bottom-1753186761">
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
    </section>
  );
}

export default ForumSobre;
