import { useState } from "react";

const PantallaConBotonConEstado = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Botón con contador y ESTADO</h1>
      <button
        onClick={() => {
          // toma el valor anterior del contador, lo incrementa en 1,
          // y luego lo cambia como nuevo valor del contador interno
          setContador((prev) => prev + 1);

          // otra forma de escribirlo, con un nombre diferente para
          // la variable del valor anterior. Hace lo mismo, toma el
          // valor anterior del contador, lo incrementa en 1, y luego
          // lo cambia como nuevo valor del contador interno
          setContador((contadorAnterior) => contadorAnterior + 1);

          // lo mismo que los dos casos anteriores
          setContador((valorAntes) => valorAntes + 1);
        }}
      >
        Botón
      </button>
      <br />
      {contador}
    </div>
  );
};

export default PantallaConBotonConEstado;
