export function obtenerDatosDelDia() {
  return fetch("https://api.nasa.gov/planetary/apod?api_key=")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return {
        fecha: data.date,
        explicacion: data.explanation,
        tipoContenido: data.media_type,
        titulo: data.title,
        url: data.url,
      };
    });
}
