// componente fibonacci.jsx para calcular el numero de fibonacci de 5

function calculaFibonacci(n) {
  console.log("Calculando Fibonacci de " + n);
  if (n <= 1) {
    return n;
  }
  return calculaFibonacci(n - 1) + calculaFibonacci(n - 2);
}

// Si lo ponen afuera del componente CalculoFibonacci
// se va a calcular una sola vez, cuando se carga el componente por primera vez
const resultado = calculaFibonacci(5);

const CalculoFibonacci = () => {
  /**
   * Si pusieran dentro del componente la llamada a resultado,
   * se va a calcular cada vez que el componente se renderiza,
   * lo cual no es eficiente, ya que el resultado de Fibonacci
   * de 5 es siempre el mismo, y no cambia con el tiempo.
   *
   * Al ponerlo afuera del componente, se calcula una sola vez,
   * y luego se reutiliza ese resultado cada vez que el componente
   * se renderiza.
   */

  return (
    <div>
      <h2>Fibonacci de 5: {resultado}</h2>
    </div>
  );
};

export default CalculoFibonacci;
