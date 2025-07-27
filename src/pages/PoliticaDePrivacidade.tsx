import "./PoliticaDePrivacidade.css";
import logo from "../assets/logos/logo-footer.png";

function PoliticaDePrivacidade() {
  return (
    <section className="politica-de-privacidade">
      <div className="politica-container">
        <img src={logo} alt="Ir para o Inicio" />
        <h1>Política de Privacidade</h1>
        <p>
          <strong>Última atualização:</strong> 22/07/2025
        </p>

        <p>
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos e protegemos as suas informações ao
          acessar nosso site.
        </p>

        <h2>1. Informações que coletamos</h2>
        <p>
          Coletamos informações pessoais que você nos fornece voluntariamente,
          como:
        </p>
        <ul>
          <li>
            Nome, e-mail, telefone e outros dados ao preencher formulários.
          </li>
          <li>
            Informações de navegação como IP, navegador e páginas acessadas (via
            cookies).
          </li>
        </ul>

        <h2>2. Uso das informações</h2>
        <p>Usamos os dados coletados para:</p>
        <ul>
          <li>Entrar em contato com você.</li>
          <li>Personalizar sua experiência no site.</li>
          <li>Melhorar nossos serviços, eventos e conteúdos.</li>
          <li>Cumprir obrigações legais, se necessário.</li>
        </ul>

        <h2>3. Compartilhamento de dados</h2>
        <p>
          Não vendemos, trocamos ou transferimos suas informações pessoais para
          terceiros, exceto:
        </p>
        <ul>
          <li>
            Parceiros que auxiliam na operação do site (sob acordo de
            confidencialidade).
          </li>
          <li>Quando exigido por lei.</li>
        </ul>

        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para entender e salvar suas preferências de
          navegação. Você pode desativá-los nas configurações do seu navegador,
          mas isso pode afetar a experiência no site.
        </p>

        <h2>5. Segurança</h2>
        <p>
          Adotamos medidas de segurança técnicas e organizacionais para proteger
          suas informações pessoais contra acesso não autorizado, alteração,
          divulgação ou destruição.
        </p>

        <h2>6. Seus direitos</h2>
        <p>
          Você pode solicitar a revisão, correção ou exclusão de seus dados
          pessoais a qualquer momento. Para isso, entre em contato conosco.
        </p>

        <h2>7. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política periodicamente. As alterações entrarão
          em vigor imediatamente após a publicação nesta página.
        </p>

        <h2>8. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade, entre em contato
          conosco:
          <br />
          📧{" "}
          <a href="mailto:seuemail@dominio.com">
            contato@institutoagregar.com.br
          </a>
          <br />
        </p>
      </div>
    </section>
  );
}

export default PoliticaDePrivacidade;
