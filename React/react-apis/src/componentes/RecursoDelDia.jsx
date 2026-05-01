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
      <p>Fecha: {fecha}</p>
      <p>Tipo de Contenido: {tipoContenido}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Ver Recurso
      </a>
    </div>
  );
}
