// PaginaIngressos.tsx
import "./ForumIngressos.css";

function ForumIngressos() {
  return (
    <section className="forum-ingressos">
      <div className="pagina-ingressos">
        <div className="ingresso-texto">
          <h1>Garanta o seu lugar na 3ª Edição do Fórum de Inovação!</h1>
          <p>
            O Fórum de Inovação é o ponto de encontro para mentes criativas,
            disruptivas e transformadoras. Descubra novas ideias, compartilhe
            seus projetos e conecte-se com pessoas que estão moldando o futuro.
          </p>
        </div>

        <div className="ingresso-card">
          <h2>
            <span className="tag-lote">1º LOTE</span> INGRESSO NORMAL FÓRUM
          </h2>
          <div className="valor">
            <span className="simbolo">R$</span>
            <span className="preco">275</span>
            <span className="centavos">,00</span>
          </div>
          <p className="alerta-lote">
            Aproveite o 1º lote e comece sua jornada no Fórum com o melhor valor
            disponível!
          </p>
          <ul className="beneficios">
            <li>✔ Acesso aos 2 dias de evento</li>
            <li>✔ Certificado de participação</li>
            <li>✔ Exposições e experiências tecnológicas</li>
          </ul>

          <div className="comprar-box">
            <button className="botao-comprar">COMPRAR AGORA</button>
            <p className="sympla">
              Ao clicar em 'COMPRAR AGORA" você será direcionado para a
              plataforma Sympla.
            </p>
          </div>
        </div>
        <div className="ingresso-card">
          <h2>
            <span className="tag-lote">1º LOTE</span> INGRESSO ESTUDANTE
          </h2>
          <div className="valor">
            <span className="simbolo">R$</span>
            <span className="preco">137</span>
            <span className="centavos">,50</span>
          </div>
          <p className="alerta-lote">
            Necessário a apresentação de comprovante de estudante no checkin
          </p>
          <ul className="beneficios">
            <li>✔ Acesso aos 2 dias de evento</li>
            <li>✔ Certificado de participação</li>
            <li>✔ Exposições e experiências tecnológicas</li>
          </ul>

          <div className="comprar-box">
            <button className="botao-comprar">COMPRAR AGORA</button>
            <p className="sympla">
              Ao clicar em 'COMPRAR AGORA" você será direcionado para a
              plataforma Sympla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForumIngressos;
