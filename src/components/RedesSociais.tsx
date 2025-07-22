import "./RedesSociais.css";
import {
  TbBrandLinkedinFilled,
  TbBrandInstagramFilled,
} from "react-icons/tb";

function RedesSociais() {
  return (
    <div className="redes-sociais">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/forum.inovacao/"
          target="_blank"
          rel="noreferrer"
          className="social-buttons"
        >
          <div className="icon">
            <TbBrandInstagramFilled />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/company/108214241"
          target="_blank"
          rel="noreferrer"
          className="social-buttons"
        >
          <div className="icon">
            <TbBrandLinkedinFilled />
          </div>
        </a>
      </div>
    </div>
  );
}

export default RedesSociais;
