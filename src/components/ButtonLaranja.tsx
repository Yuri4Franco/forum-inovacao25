import "./ButtonLaranja.css";

interface ButtonLaranjaProps {
  text: string;
  link: string;
  onlyDesktop?: boolean;
}

function ButtonLaranja({
  text,
  link,
  onlyDesktop = false,
}: ButtonLaranjaProps) {
  const className = onlyDesktop ? "bt-laranja only-desktop" : "bt-laranja";
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
}

export default ButtonLaranja;
