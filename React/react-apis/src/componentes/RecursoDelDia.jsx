import { formatearFecha } from "./utils/formatearFecha";

const CONFIGURACION_ESTILOS = {
  default: {
    contenedor: { clases: "", estilos: { padding: "16px" } },
    titulo: { clases: "", estilos: {} },
    texto: { clases: "", estilos: {} },
    meta: { clases: "", estilos: {} },
    enlace: { clases: "", estilos: {} },
  },
  colorido: {
    contenedor: { clases: "card bg-light p-4 rounded-4 shadow-sm border-0 mt-3", estilos: {} },
    titulo: { clases: "card-title text-dark h4 mb-3", estilos: {} },
    texto: { clases: "card-text text-secondary mb-3", estilos: {} },
    meta: { clases: "text-muted mb-1", estilos: {} },
    enlace: { clases: "btn btn-primary align-self-start", estilos: {} },
  },
  anime: {
    contenedor: {
      clases: "",
      estilos: {
        background: "linear-gradient(135deg, #ff6eb4 0%, #a855f7 50%, #06b6d4 100%)",
        border: "3px solid #ff1493",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "12px",
        boxShadow: "0 0 15px #ff6eb4",
      },
    },
    titulo: {
      clases: "",
      estilos: {
        color: "#fff",
        fontWeight: "900",
        fontSize: "1.4rem",
        textShadow: "2px 2px 0px #ff1493",
        letterSpacing: "1px",
      },
    },
    texto: { clases: "", estilos: { color: "#ffe0f7", fontSize: "0.95rem" } },
    meta: { clases: "", estilos: { color: "#ffd6f5", fontSize: "0.85rem" } },
    enlace: {
      clases: "",
      estilos: {
        background: "#ff1493",
        color: "#fff",
        border: "none",
        padding: "8px 20px",
        borderRadius: "20px",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "8px",
      },
    },
  },
  vintage: {
    contenedor: {
      clases: "",
      estilos: {
        background: "#f5e6c8",
        border: "3px double #8b6914",
        borderRadius: "4px",
        padding: "20px",
        marginTop: "12px",
        boxShadow: "3px 3px 8px rgba(139,105,20,0.3)",
        fontFamily: "Georgia, serif",
      },
    },
    titulo: {
      clases: "",
      estilos: {
        color: "#5c3d11",
        fontFamily: "Georgia, serif",
        fontWeight: "bold",
        borderBottom: "1px solid #8b6914",
        paddingBottom: "8px",
      },
    },
    texto: { clases: "", estilos: { color: "#6b4c1e", fontStyle: "italic", lineHeight: "1.7" } },
    meta: { clases: "", estilos: { color: "#8b6914", fontSize: "0.85rem" } },
    enlace: {
      clases: "",
      estilos: {
        background: "#8b6914",
        color: "#f5e6c8",
        border: "1px solid #5c3d11",
        padding: "6px 16px",
        textDecoration: "none",
        fontFamily: "Georgia, serif",
        display: "inline-block",
        marginTop: "8px",
      },
    },
  },
  disney: {
    contenedor: {
      clases: "",
      estilos: {
        background: "linear-gradient(135deg, #fff9c4 0%, #ffe0b2 100%)",
        border: "4px solid #ff9800",
        borderRadius: "24px",
        padding: "20px",
        marginTop: "12px",
        boxShadow: "0 6px 20px rgba(255,152,0,0.4)",
      },
    },
    titulo: {
      clases: "",
      estilos: {
        color: "#e65100",
        fontWeight: "900",
        fontSize: "1.4rem",
        textShadow: "1px 1px 0px #ffcc02",
      },
    },
    texto: { clases: "", estilos: { color: "#4a148c", fontSize: "0.95rem", lineHeight: "1.6" } },
    meta: { clases: "", estilos: { color: "#6a1b9a", fontSize: "0.85rem", fontWeight: "bold" } },
    enlace: {
      clases: "",
      estilos: {
        background: "#ff9800",
        color: "#fff",
        border: "2px solid #e65100",
        padding: "8px 20px",
        borderRadius: "24px",
        textDecoration: "none",
        fontWeight: "900",
        display: "inline-block",
        marginTop: "8px",
      },
    },
  },
  minimalista: {
    contenedor: {
      clases: "",
      estilos: {
        background: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
        padding: "24px",
        marginTop: "12px",
      },
    },
    titulo: {
      clases: "",
      estilos: {
        color: "#212121",
        fontWeight: "400",
        fontSize: "1.2rem",
        letterSpacing: "0.5px",
      },
    },
    texto: { clases: "", estilos: { color: "#616161", fontSize: "0.9rem", lineHeight: "1.8" } },
    meta: { clases: "", estilos: { color: "#9e9e9e", fontSize: "0.8rem" } },
    enlace: {
      clases: "",
      estilos: {
        color: "#212121",
        border: "1px solid #212121",
        padding: "6px 14px",
        textDecoration: "none",
        fontSize: "0.85rem",
        display: "inline-block",
        marginTop: "8px",
      },
    },
  },
  fosforescente: {
    contenedor: {
      clases: "",
      estilos: {
        background: "#0a0a0a",
        border: "2px solid #39ff14",
        borderRadius: "8px",
        padding: "20px",
        marginTop: "12px",
        boxShadow: "0 0 20px #39ff14, inset 0 0 20px rgba(57,255,20,0.05)",
      },
    },
    titulo: {
      clases: "",
      estilos: {
        color: "#39ff14",
        fontWeight: "bold",
        fontSize: "1.3rem",
        textShadow: "0 0 10px #39ff14, 0 0 20px #39ff14",
      },
    },
    texto: { clases: "", estilos: { color: "#ccff99", fontSize: "0.9rem", lineHeight: "1.7" } },
    meta: {
      clases: "",
      estilos: { color: "#00ffff", fontSize: "0.85rem", textShadow: "0 0 5px #00ffff" },
    },
    enlace: {
      clases: "",
      estilos: {
        color: "#ff00ff",
        border: "1px solid #ff00ff",
        padding: "6px 16px",
        textDecoration: "none",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "8px",
        textShadow: "0 0 8px #ff00ff",
        boxShadow: "0 0 10px #ff00ff",
      },
    },
  },
};

export function RecursoDelDia({
  fecha,
  explicacion,
  tipoContenido,
  titulo,
  url,
  estilo = "default",
}) {
  const cfg = CONFIGURACION_ESTILOS[estilo] ?? CONFIGURACION_ESTILOS.default;

  return (
    <div className={cfg.contenedor.clases} style={cfg.contenedor.estilos}>
      <h2 className={cfg.titulo.clases} style={cfg.titulo.estilos}>
        {titulo}
      </h2>
      <p className={cfg.texto.clases} style={cfg.texto.estilos}>
        {explicacion}
      </p>
      <p className={cfg.meta.clases} style={cfg.meta.estilos}>
        <strong>Fecha:</strong> {formatearFecha(fecha)}
      </p>
      <p className={cfg.meta.clases} style={cfg.meta.estilos}>
        <strong>Tipo de Contenido:</strong> {tipoContenido}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cfg.enlace.clases}
        style={cfg.enlace.estilos}
      >
        Ver Recurso
      </a>
    </div>
  );
}
