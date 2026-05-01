const PantallaConBotonSinEstado = () => {
  // cada vez que se haga un renderizado de este componente,
  // se va a evaluar dicha expresión, es decir, iniciar el
  // contador a 0
  let contador = 0;

  return (
    <div>
      <h1>Botón con contador y SIN ESTADO</h1>
      <button
        onClick={() => {
          // cada vez que se haga click en el botón, se va a ejecutar
          // esta función, la cual va a imprimir en consola el mensaje
          // "Botón presionado", luego va a incrementar el contador en 1,
          // y luego va a imprimir en consola el valor del contador.
          //
          // Sin embargo, como el contador no es una variable de estado, cada
          // vez que se haga click en el botón, cuando se renderiza el componente
          // nuevamente, el contador se va a reiniciar a 0, y estas operaciones
          // no van a tener efecto en el valor del contador que se muestra en
          // pantalla (ni que se guarda en la variable contador).
          console.log("Botón presionado");
          contador = contador + 1;
          console.log("Contador:", contador);
        }}
      >
        Botón
      </button>
      <br />
      {contador}
    </div>
  );
};

export default PantallaConBotonSinEstado;
