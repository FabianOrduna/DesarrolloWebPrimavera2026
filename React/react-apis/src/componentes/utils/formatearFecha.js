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
