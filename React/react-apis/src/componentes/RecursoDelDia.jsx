export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
}) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{explicacion}</p>
      <p>Fecha: {formatearFecha(fecha)}</p>
      <p>Tipo de Contenido: {tipoContenido}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver Recurso
      </a>
    </div>
  );
}

// funcion para modificar como se muestra la fecha de un formato YYYY-MM-DD a un formato en texto
export function formatearFecha(fecha) {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [anio, mes, dia] = fecha.split("-");
  return `${dia} de ${meses[parseInt(mes) - 1]} de ${anio}`;
}

// componente alternativo a RecursoDelDia que sea colorido y tenga un diseño profesional.
export function RecursoDelDiaColorido({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
}) {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#333" }}>{titulo}</h2>
      <p style={{ color: "#666" }}>{explicacion}</p>
      <p style={{ color: "#999" }}>Fecha: {formatearFecha(fecha)}</p>
      <p style={{ color: "#999" }}>Tipo de Contenido: {tipoContenido}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#007BFF", textDecoration: "none" }}
      >
        Ver Recurso
      </a>
    </div>
  );
}
