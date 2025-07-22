import TrajetoriaLinha from "../components/TrajetoriaLinha";
import "./NossaTrajetoria.css";
import {
  BsPeopleFill,
  BsEasel2Fill,
  BsBuildingsFill,
  BsFillGeoFill,
} from "react-icons/bs";

function NossaTrajetoria() {
  return (
    <section className="nossa-trajetoria-section">
      <div className="nossa-trajetoria-container">
        <h1>
          NOSSA <span className="break destaque">TRAJETORIA</span>
        </h1>
        <TrajetoriaLinha variant="com-circulo" />
        <h2>2023</h2>
        <p>O primeiro Fórum de Inovação</p>
        <div className="impacto">
          <div>
            <BsPeopleFill />
            <p>+500</p>
            <p>participantes</p>
          </div>
          <div>
            <BsEasel2Fill />
            <p>16</p>
            <p>expositores</p>
          </div>
          <div>
            <BsBuildingsFill />
            <p>+60</p>
            <p>organizações</p>
            <p>impactadas</p>
          </div>
          <div>
            <BsFillGeoFill />
            <p>+10</p>
            <p>cidades</p>
            <p>alcançadas</p>
          </div>
        </div>
        <TrajetoriaLinha variant="sem-circulo" />
        <h2>2024</h2>
        <p>O segundo Fórum de Inovação</p>
        <div className="impacto">
          <div>
            <BsPeopleFill />
            <p>+700</p>
            <p>participantes</p>
          </div>
          <div>
            <BsEasel2Fill />
            <p>30</p>
            <p>expositores</p>
          </div>
          <div>
            <BsBuildingsFill />
            <p>+90</p>
            <p>organizações</p>
            <p>impactadas</p>
          </div>
          <div>
            <BsFillGeoFill />
            <p>+27</p>
            <p>cidades</p>
            <p>alcançadas</p>
          </div>
        </div>
        <TrajetoriaLinha variant="sem-circulo" />
        <h2>2025</h2>
        <p>O terceiro Fórum de Inovação</p>
        <p className="chamada-acao">
          Vamos juntos fazer da 3ª edição o{" "}
          <strong>maior e mais impactante</strong> Fórum de Inovação já
          realizado!
        </p>
      </div>
    </section>
  );
}

export default NossaTrajetoria;
