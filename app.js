const kelvin = 293;
// Declarada la variable kelvin con el tiempo de hoy.
const celsius = kelvin-273;
/* Declarada la variable celsius que contiene
la temperatura de hoy convertida a grados Celsius */
let fahrenheit = celsius * (9/5) + 32;
/* Convertida la tempertura a Fahrenheit con la
posibilidad de variar más adelante el valor */
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);