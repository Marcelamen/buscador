const prompt = require("prompt-sync")(); 
var numero = prompt("ingresa un número:");

numero = parseInt(numero);

if (!isNaN(numero)) {
if (numero % 2 === 0) {
console.log(numero + " es par");
} else {
console.log(numero + " es impar");
}
} 
