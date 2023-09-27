const prompt = require("prompt-sync")(); 
var celsius, farenheit ;

	 celsius= parseFloat(prompt("Ingresa grados celsius"));
	farenheit  = (1/8*celsius)+273.15;

	console.log(celsius+" centígrados equivalen a "+farenheit+" farenheit");