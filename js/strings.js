//METODOS PARA STRINGS

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';

//console.log es una funcion porque le paso el valor producto en el parentesis y cuando utilizamos un punto y un nombre estamos utilizando un metodo aun que en el caso de length es una propiedad, si fuera un metodo utilizaria ().

//Cantidad de caracteres en una cadena de texto
console.log(tweet.length);

//En que posicion se encuentra una cadena de texto IndexOf o para saber si existe alguna palabra en una cadena de texto, si da un valor neativo o -1 el resultado significa que la palabra no fue encontrada (retorna posicion)

console.log(tweet.indexOf('JavaScript'));

// Includes retorna true o false si contiene o no la palabra
console.log(tweet.includes('JavaScript'));

//CONCATENACION Y TEMPLATES DE SCRIPT

//Concatenacion
const nombre = 'Juan';
const email = 'correo@correo.com'

console.log("Nombre cliente: " + nombre + " " + "Email: " + email);

console.log("Nombre cliente: " , nombre , " " , "Email: " , email); //tambien se puede aplicar esta sintaxis

//Template String - String Literals 
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);