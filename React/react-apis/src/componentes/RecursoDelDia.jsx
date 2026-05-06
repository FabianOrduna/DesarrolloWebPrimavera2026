import { formatearFecha } from "./utils/formatearFecha";

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

// componente alternativo a RecursoDelDia que sea colorido y tenga un diseño profesional.
export function RecursoDelDiaColorido({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
}) {
  return (
    <div className="card bg-light p-4 rounded-4 shadow-sm border-0 mt-3">
      <h2 className="card-title text-dark h4 mb-3">{titulo}</h2>
      <p className="card-text text-secondary mb-3">{explicacion}</p>
      <p className="text-muted mb-1">
        <span className="fw-semibold">Fecha:</span> {formatearFecha(fecha)}
      </p>
      <p className="text-muted mb-3">
        <span className="fw-semibold">Tipo de Contenido:</span> {tipoContenido}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary align-self-start"
      >
        Ver Recurso
      </a>
    </div>
  );
}
