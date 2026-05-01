export function BotonMarca({ texto, tipo }) {
  /*
  
  let colorConIf = "";

  if (tipo === "primario") {
    colorConIf = "purple";
  } else {
    colorConIf = "white";
  }*/

  const colorFondo = tipo === "primario" ? "purple" : "white";
  const colorTexto = tipo === "primario" ? "white" : "black";

  return (
    <button style={{ backgroundColor: colorFondo, color: colorTexto }}>
      {texto}
    </button>
  );
}
