const kelvin = 293;
// Declarada la variable kelvin con el tiempo de hoy.
const celsius = kelvin-273;
/* Declarada la variable celsius que contiene
la temperatura de hoy convertida a grados Celsius */
let fahrenheit = celsius * (9/5) + 32;
/* Convertida la tempertura a Fahrenheit con la
posibilidad de variar más adelante el valor */
fahrenheit = Math.floor(fahrenheit);
// Redondeado y convertido en entero
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// Output de la temperatura en ºF
let newton = celsius * (33/100);
// Declarada la conversión a grados Newton
newton = Math.floor(newton);
// Redondeado y convertido en entero
console.log(`The temperature is ${newton} degrees Newton`);
// Output de la temperatura en ºN
