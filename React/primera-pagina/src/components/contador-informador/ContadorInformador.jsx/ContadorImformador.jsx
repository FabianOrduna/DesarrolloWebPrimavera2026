import { useEffect, useState } from "react";

export const ContadorInformador = () => {
  const [contador, setContador] = useState(0);

  // Este useEffect se ejecutará solo una vez, cuando el componente se monte
  useEffect(() => {
    console.log("La página se ha cargado");
  }, []);

  useEffect(() => {
    console.log("El contador cambió", contador);
    document.title = `La cuenta va en ${contador}`;
  }, [contador]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar + 1</button>
    </div>
  );
};
