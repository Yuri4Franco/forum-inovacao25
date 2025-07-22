import "./TrajetoriaLinha.css";

function TrajetoriaLinha({
  variant = "com-circulo",
}: {
  variant?: "com-circulo" | "sem-circulo";
}) {
  return (
    <div className="trajetoria-linha">
      <div className={`linha ${variant}`}></div>
    </div>
  );
}

export default TrajetoriaLinha;
