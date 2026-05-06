export async function obtenerDatosDelDia() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=LcUzaxu7d2y4ByUXHW3exnnJECp7GtPE6sOmitk8",
  );
  const data = await response.json();

  console.log(data);

  return {
    fecha: data.date,
    explicacion: data.explanation,
    tipoContenido: data.media_type,
    titulo: data.title,
    url: data.url,
  };
}
