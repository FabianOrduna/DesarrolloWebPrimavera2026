import { useEffect, useState } from "react";
import { RecursoDelDia } from "./RecursoDelDia";
import { obtenerDatosDelDia } from "./obtenerDatosDelDia";

const ESTILOS = ["default", "colorido", "anime", "vintage", "disney", "minimalista", "fosforescente"];

export function NasaDatosDelDiaContenedor() {
  // variable de estado para guardar la respuesta de la API
  const [datosDelDia, setDatosDelDia] = useState(null);
  // useEffect para sincronizar con info externa, en este caso la API de NASA
  useEffect(() => {
    obtenerDatosDelDia().then((datosTransformados) => {
      setDatosDelDia(datosTransformados);
    });
  }, []);

  if (datosDelDia === null) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {ESTILOS.map((estilo) => (
          <div key={estilo} className="col-12 col-md-6 col-xl-4 mb-4">
            <h3 className="text-capitalize fw-semibold mb-1 fs-6">Estilo: {estilo}</h3>
            <RecursoDelDia
              fecha={datosDelDia.fecha}
              explicacion={datosDelDia.explicacion}
              tipoContenido={datosDelDia.tipoContenido}
              titulo={datosDelDia.titulo}
              url={datosDelDia.url}
              estilo={estilo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
