// today's forecast in Kelvin
const kelvin = 293;

// convert to Celsius
const celsius = kelvin - 273;

// convert to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Fahrenheit temperature rounded down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);