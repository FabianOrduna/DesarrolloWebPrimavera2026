const imprimeYAvisa = (arreglo) => {
  console.log("Imprimo el arreglo");
  console.log(arreglo);
};

const alumnos = [];
imprimeYAvisa(alumnos);
/*

console.log("Agrego un alumno al arreglo");
alumnos.push("Mario"); // <---- push: agrega un elemento al final del arreglo
imprimeYAvisa(alumnos);

console.log("Agrego un alumno al arreglo");
alumnos.push("Mariana"); // <---- push: agrega un elemento al final del arreglo
imprimeYAvisa(alumnos);

console.log("Agrego un alumno al arreglo");
alumnos.push("Pepito"); // <---- push: agrega un elemento al final del arreglo
imprimeYAvisa(alumnos);

console.log("Elimino el último alumno del arreglo");
alumnos.pop(); // <---- pop: elimina el último elemento del arreglo
imprimeYAvisa(alumnos);

console.log("Elimino el primer alumno del arreglo");
alumnos.shift(); // <---- shift: elimina el primer elemento del arreglo
imprimeYAvisa(alumnos);

*/

alumnos.push("Mario");
alumnos.push("Mariana");
alumnos.push("Pepito");

imprimeYAvisa(alumnos);

const alumnosMayusculas = alumnos.map((alumno) => alumno.toUpperCase()); // <---- map: crea un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original
console.log("Alumnos en mayúsculas:");
console.log(alumnosMayusculas);

console.log("Alumnos originales:");
console.log(alumnos);

// filtro de alumnos que no son Pepito
const alumnosSinPepito = alumnos.filter((alumno) => alumno !== "Pepito"); // <---- filter: crea un nuevo arreglo con los elementos que cumplen la condición dada
console.log("Alumnos sin Pepito:");
console.log(alumnosSinPepito);
