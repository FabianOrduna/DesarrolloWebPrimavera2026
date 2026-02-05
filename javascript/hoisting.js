// sí va a correr porque sumar es una función declarada con function, que se "hoistea" al inicio del archivo
console.log("Resultado", sumar(1, 2)); // sumar

function sumar(a, b) {
  return a + b;
}

// va a dar error porque resta no está definida en este punto
console.log("Resultado", resta(5, 3)); // resta

const resta = (a, b) => a - b;
