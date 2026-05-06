import { useEffect, useState } from "react";
import { RecursoDelDia, RecursoDelDiaColorido } from "./RecursoDelDia";
import { obtenerDatosDelDia } from "./obtenerDatosDelDia";

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
    <>
      <RecursoDelDia
        fecha={datosDelDia.fecha}
        explicacion={datosDelDia.explicacion}
        tipoContenido={datosDelDia.tipoContenido}
        titulo={datosDelDia.titulo}
        url={datosDelDia.url}
      />
      <RecursoDelDiaColorido
        fecha={datosDelDia.fecha}
        explicacion={datosDelDia.explicacion}
        tipoContenido={datosDelDia.tipoContenido}
        titulo={datosDelDia.titulo}
        url={datosDelDia.url}
      />
    </>
  );
}
